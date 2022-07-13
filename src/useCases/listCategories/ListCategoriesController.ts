import Category from "../../modules/cars/entities/Category";
import { Request, Response } from "express";
// import { IListCategoriesUseCase } from "./IListCategoriesUseCase";
import ListCategoriesUseCase from "./ListCategoriesUseCase";
import { container } from "tsyringe";

export default class ListCategoriesHandler {
  // constructor(private listCategoriesUseCase: IListCategoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<void> {
    // const categories: Category[] = await this.listCategoriesUseCase.execute();
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
    const categories: Category[] = await listCategoriesUseCase.execute();
    response.json(categories);
  }
}
