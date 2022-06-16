import { ICreateCategoryDTO } from "../../modules/cars/repositories/ICategoriesRepository";

interface IImportCategoriesUseCase {
  execute(categoriesFilePath: string): Promise<void>;
}

export { ICreateCategoryDTO, IImportCategoriesUseCase };
