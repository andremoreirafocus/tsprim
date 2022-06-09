import CategoriesMemoryRepository from "../../modules/cars/repositories/CategoriesMemoryRepository";
import ImportCategoriesUseCase from "./ImportCategoriesUseCase";
import ImportCategoriesHandler from "./ImportCategoriesHandler";

const categoriesRepository = CategoriesMemoryRepository.getInstance();
const importCategoriesUseCase = new ImportCategoriesUseCase(
  categoriesRepository
);
const importCategoriesHandler = new ImportCategoriesHandler(
  importCategoriesUseCase
);

export default importCategoriesHandler;
