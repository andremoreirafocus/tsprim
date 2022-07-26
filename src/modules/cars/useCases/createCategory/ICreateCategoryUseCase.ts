import { ICreateCategoryDTO } from "../../repositories/ICategoriesRepository";

interface ICreateCategoryUseCase {
  execute({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICreateCategoryDTO, ICreateCategoryUseCase };
