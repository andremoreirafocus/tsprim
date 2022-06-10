import { ICreateCategoryDTO } from "../../modules/cars/repositories/ICategoriesRepository";

interface IImportCategoriesUseCase {
  execute(categoriesFilePath: string): void;
}

export { ICreateCategoryDTO, IImportCategoriesUseCase };
