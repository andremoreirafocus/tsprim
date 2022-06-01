import Category from "../models/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../repositories/ICategoriesRepository";

export default class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) {}
  execute({ name, description }: ICreateCategoryDTO): void {
    const categoryAlreadyExists = this.checkIfAlreadyExists(name);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }

  checkIfAlreadyExists(name: string): boolean {
    const category: Category = this.categoriesRepository.findByName(name);
    const alreadyExists = !!category;
    return alreadyExists;
  }
}
