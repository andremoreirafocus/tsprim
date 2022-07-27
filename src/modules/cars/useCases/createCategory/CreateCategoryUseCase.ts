import { inject, injectable } from "tsyringe";
import AppError from "../../../../errors/AppError";
// import Category from "../../modules/cars/entities/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../../repositories/ICategoriesRepository";
import { ICreateCategoryUseCase } from "./ICreateCategoryUseCase";

@injectable()
export default class CreateCategoryUseCase implements ICreateCategoryUseCase {
  constructor(@inject("CategoriesRepository") private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.checkIfAlreadyExists(name);
    if (categoryAlreadyExists) {
      throw new AppError("Category already exists!");
      // console.log(`Category ${name} already exists!`);
    }

    await this.categoriesRepository.create({ name, description });
  }

  async checkIfAlreadyExists(name: string): Promise<boolean> {
    const category = await this.categoriesRepository.findByName(name);
    const alreadyExists = !!category;
    return alreadyExists;
  }
}
