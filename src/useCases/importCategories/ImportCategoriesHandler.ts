import { Request, Response } from "express";
import Category from "../../modules/cars/models/Category";
import { IImportCategoriesUseCase } from "./IImportCategoriesUseCase";
import { readFile } from "fs/promises";

export default class ImportCategoryHandler {
  constructor(private importCategoriesUseCase: IImportCategoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { file } = request;
      console.log(file);
      // return response.json(file);
      const categoriesListFileName = file.path;
      const categories = await this.extractCategoriesFromFile(
        categoriesListFileName
      );
      this.importCategoriesUseCase.execute(categories);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
    return response.status(201).send();
  }

  async extractCategoriesFromFile(file: any): Promise<Category[]> {
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
