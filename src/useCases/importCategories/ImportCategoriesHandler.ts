import { Request, Response } from "express";
import Category from "../../modules/cars/models/Category";
import { IImportCategoriesUseCase } from "./IImportCategoriesUseCase";
import { readFile } from "fs/promises";
import fs from "fs";
import { parse as csvParser } from "csv-parse";

export default class ImportCategoryHandler {
  constructor(private importCategoriesUseCase: IImportCategoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { file } = request;
      console.log(file);
      const categoriesListFileName = file.path;
      const stream = fs.createReadStream(categoriesListFileName);
      const csvFileParser = csvParser({
        delimiter: ";",
      });
      const lines = [];
      stream.pipe(csvFileParser);
      csvFileParser.on("data", async (line) => {
        // console.log(line);
        lines.push(line);
      });
      csvFileParser.on("end", () => {
        const categories = this.extractCategoriesFromLines(lines);
        this.importCategoriesUseCase.execute(categories);
        return response.status(201).send();
      });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  extractCategoriesFromLines(lines): Category[] {
    const categories = [];
    for (const line of lines) {
      console.log(line);
      const [name, description] = line;
      categories.push({ name, description });
    }
    return categories;
  }

  async extractCategoriesFromFileOld(file: string): Promise<Category[]> {
    const lines = await this.getFileContent(file);
    const categories = [];
    for (const line of lines.split("\r\n")) {
      console.log(line);
      const [name, description] = line.split(";");
      categories.push({ name, description });
    }
    return categories;
  }

  async getFileContent(fileName: any) {
    const fileContent = await readFile(fileName, "utf8");
    return fileContent;
  }
}
