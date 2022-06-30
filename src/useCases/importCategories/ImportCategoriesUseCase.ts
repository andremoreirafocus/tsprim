import Category from "../../modules/cars/entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../../modules/cars/repositories/ICategoriesRepository";
import { IImportCategoriesUseCase } from "./IImportCategoriesUseCase";

import { promises as fsp } from "fs";
import fs from "fs";
import { parse as csvParser } from "csv-parse";

export default class ImportCategoriesUseCase
// implements IImportCategoriesUseCase
{
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async loadCategories(categoriesListFileName: string): Promise<Category[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(categoriesListFileName);
      const csvFileParser = csvParser({
        delimiter: ";",
      });
      const categories = [];
      stream.pipe(csvFileParser);
      csvFileParser.on("data", async (line) => {
        const [name, description] = line;
        categories.push({ name, description });
      });
      csvFileParser.on("end", async () => {
        console.log(categories);
        try {
          await fsp.unlink(categoriesListFileName);
        } catch (err) {
          console.log(`Error removing file ${categoriesListFileName}`);
        }
        resolve(categories);
      });
      csvFileParser.on("error", () => {
        reject(new Error(`error parsing file ${categoriesListFileName}!`));
      });
    });
  }

  async execute(categoriesListFileName: string): Promise<void> {
    const categories = await this.loadCategories(categoriesListFileName);
    for (const category of categories) {
      const { name, description } = category;
      const categoryAlreadyExists = await this.checkIfAlreadyExists(name);
      if (categoryAlreadyExists) {
        // throw new Error("Category already exists!");
        console.log(`Category ${name} already exists!`);
      } 
      else await this.categoriesRepository.create({ name, description });
    }
  }

  async checkIfAlreadyExists(name: string): Promise<boolean> {
    const category = await this.categoriesRepository.findByName(name);
    const alreadyExists = !!category;
    return alreadyExists;
  }
}
