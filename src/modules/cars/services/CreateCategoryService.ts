import Category from "../models/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../repositories/ICategoriesRepository";

export default class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ name, description }: ICreateCategoryDTO): void {
    const foundCategory: Category = this.checkIfAlreadyExists(name);
    if (foundCategory) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }

  checkIfAlreadyExists(name: string): Category | undefined {
    const category: Category = this.categoriesRepository.findByName(name);
    return category;
  }
}
