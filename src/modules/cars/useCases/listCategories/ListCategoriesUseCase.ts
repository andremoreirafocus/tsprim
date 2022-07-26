import { inject, injectable } from "tsyringe";
import Category from "../../entities/Category";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { IListCategoriesUseCase } from "./IListCategoriesUseCase";

@injectable()
export default class ListCategoriesUseCase implements IListCategoriesUseCase {
  constructor(@inject("CategoriesRepository") private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.get();
    return categories;
  }
}
