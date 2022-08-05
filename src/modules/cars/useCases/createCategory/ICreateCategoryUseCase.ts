import { ICreateCategoryDTO } from "../../entities/ICategoriesRepository";

interface ICreateCategoryUseCase {
  execute({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICreateCategoryDTO, ICreateCategoryUseCase };
