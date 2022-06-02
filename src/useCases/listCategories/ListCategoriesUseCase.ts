import Category from "../../modules/cars/models/Category";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { IListCategoriesUseCase } from "./IListCategoriesUseCase";

export default class ListCategoriesUseCase implements IListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories: Category[] = this.categoriesRepository.get();
    return categories;
  }
}
