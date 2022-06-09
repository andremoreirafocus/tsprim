import Category from "../../modules/cars/models/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../../modules/cars/repositories/ICategoriesRepository";
import { IImportCategoriesUseCase } from "./IImportCategoriesUseCase";

export default class ImportCategoriesUseCase
  implements IImportCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(categories: ICreateCategoryDTO[]): void {
    for (const category of categories) {
      const { name, description } = category;
      const categoryAlreadyExists = this.checkIfAlreadyExists(name);
      if (categoryAlreadyExists) {
        throw new Error("Category already exists!");
      }
      this.categoriesRepository.create({ name, description });
    }
  }

  checkIfAlreadyExists(name: string): boolean {
    const category: Category = this.categoriesRepository.findByName(name);
    const alreadyExists = !!category;
    return alreadyExists;
  }
}
