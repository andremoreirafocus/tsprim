import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppError";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "../../entities/ICategoriesRepository";
import { ICreateCategoryUseCase } from "./ICreateCategoryUseCase";

@injectable()
export default class CreateCategoryUseCase implements ICreateCategoryUseCase {
  constructor(@inject("CategoriesRepository") private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.checkIfAlreadyExists(name);
    if (categoryAlreadyExists) {
      throw new AppError("Category already exists!");
    }
    await this.categoriesRepository.create({ name, description });
  }

  async checkIfAlreadyExists(name: string): Promise<boolean> {
    const category = await this.categoriesRepository.findByName(name);
    const alreadyExists = !!category;
    return alreadyExists;
  }
}
