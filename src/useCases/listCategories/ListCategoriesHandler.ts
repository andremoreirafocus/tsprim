import Category from "../../modules/cars/entities/Category";
import { Request, Response } from "express";
import { IListCategoriesUseCase } from "./IListCategoriesUseCase";

export default class ListCategoriesHandler {
  constructor(private listCategoriesUseCase: IListCategoriesUseCase) {}

  handle(request: Request, response: Response): void {
    const categories: Category[] = this.listCategoriesUseCase.execute();
    response.json(categories);
  }
}
