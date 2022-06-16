import { Request, Response } from "express";
import Category from "../../modules/cars/entities/Category";
import { IImportCategoriesUseCase } from "./IImportCategoriesUseCase";
// import { readFile } from "fs/promises";
// import fs from "fs";
// import { parse as csvParser } from "csv-parse";

export default class ImportCategoryHandler {
  constructor(private importCategoriesUseCase: IImportCategoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { file } = request;
      console.log(file);
      await this.importCategoriesUseCase.execute(file.path);
      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
