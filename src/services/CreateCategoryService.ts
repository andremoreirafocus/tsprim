import Category from "../models/Category";
import CategoriesRepository from "../repositories/CategoriesRepository";

interface ICreateCategoryDTO {
  name: String;
  description: String;
}

export default class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository) {}
  execute({ name, description }: ICreateCategoryDTO): void {
    const foundCategory: Category = this.checkIfAlreadyExists(name);
    if (foundCategory) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }

  checkIfAlreadyExists(name: String): Category | undefined {
    const category: Category = this.categoriesRepository.findOne(name);
    return category;
  }
}
