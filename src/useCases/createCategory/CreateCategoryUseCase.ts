import Category from "../../modules/cars/entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../../modules/cars/repositories/ICategoriesRepository";
import { ICreateCategoryUseCase } from "./ICreateCategoryUseCase";

export default class CreateCategoryUseCase implements ICreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.checkIfAlreadyExists(name);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }

  async checkIfAlreadyExists(name: string): Promise<boolean> {
    const category = await this.categoriesRepository.findByName(name);
    const alreadyExists = !!category;
    return alreadyExists;
  }
}
