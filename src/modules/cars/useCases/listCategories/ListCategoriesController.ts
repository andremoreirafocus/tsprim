import Category from "../../entities/Category";
import { Request, Response } from "express";
import { IListCategoriesUseCase } from "./IListCategoriesUseCase";
// import ListCategoriesUseCase from "./ListCategoriesUseCase";
import { container, inject, injectable } from "tsyringe";

@injectable()
export default class ListCategoriesHandler {
  constructor(@inject("ListCategoriesUseCase") private listCategoriesUseCase: IListCategoriesUseCase) {}
  async handle(request: Request, response: Response) {
    const categories: Category[] = await this.listCategoriesUseCase.execute();
    // const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
    // const categories: Category[] = await listCategoriesUseCase.execute();
    return response.json(categories);
  }
}
