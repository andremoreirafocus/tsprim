import Category from "../../modules/cars/entities/Category";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { IListCategoriesUseCase } from "./IListCategoriesUseCase";

export default class ListCategoriesUseCase implements IListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> {
    const categories: Category[] = await this.categoriesRepository.get();
    return categories;
  }
}
