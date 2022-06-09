import { ICreateCategoryDTO } from "../../modules/cars/repositories/ICategoriesRepository";

interface IImportCategoriesUseCase {
  execute(categories: ICreateCategoryDTO[]): void;
}

export { ICreateCategoryDTO, IImportCategoriesUseCase };
