import { ICreateCategoryDTO } from "../../modules/cars/repositories/ICategoriesRepository";

interface ICreateCategoryUseCase {
  execute({ name, description }: ICreateCategoryDTO): void;
}

export { ICreateCategoryDTO, ICreateCategoryUseCase };
