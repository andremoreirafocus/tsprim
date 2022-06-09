import { Request, Response } from "express";
import { IImportCategoriesUseCase } from "./IImportCategoriesUseCase";

export default class ImportCategoryHandler {
  constructor(private importCategoriesUseCase: IImportCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const { categories } = request.body;
    try {
      this.importCategoriesUseCase.execute(categories);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
    return response.status(201).send();
  }
}
