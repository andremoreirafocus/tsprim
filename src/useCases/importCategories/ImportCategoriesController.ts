import { Request, Response } from "express";
import { IImportCategoriesUseCase } from "./IImportCategoriesUseCase";
import { container, inject, injectable } from "tsyringe";
// import Category from "../../modules/cars/entities/Category";
import ImportCategoriesUseCase from "./ImportCategoriesUseCase";

@injectable()
export default class ImportCategoryController {
  constructor(@inject("ImportCategoriesUseCase") private importCategoriesUseCase: IImportCategoriesUseCase) {}

  async handle(request: Request, response: Response) {
    try {
      // const importCategoriesUseCase = container.resolve(ImportCategoriesUseCase)
      const { file } = request;
      console.log(file);
      await this.importCategoriesUseCase.execute(file.path);
      // await importCategoriesUseCase.execute(file.path);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
    return response.status(201).send();
  }
}
