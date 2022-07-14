import { Request, Response } from "express";
import { container } from "tsyringe";
// import Category from "../../modules/cars/entities/Category";
import { IImportCategoriesUseCase } from "./IImportCategoriesUseCase";
import ImportCategoriesUseCase from "./ImportCategoriesUseCase";
// import { readFile } from "fs/promises";
// import fs from "fs";
// import { parse as csvParser } from "csv-parse";

export default class ImportCategoryController {
  // constructor(private importCategoriesUseCase: IImportCategoriesUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      const importCategoriesUseCase = container.resolve(ImportCategoriesUseCase)
      const { file } = request;
      console.log(file);
      // await this.importCategoriesUseCase.execute(file.path);
      await importCategoriesUseCase.execute(file.path);
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
