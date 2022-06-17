import CategoriesMemoryRepository from "../../modules/cars/repositories/CategoriesMemoryRepository";
// import CategoriesDatabaseRepository from "../../modules/cars/repositories/CategoriesDatabaseRepository"
import ImportCategoriesUseCase from "./ImportCategoriesUseCase";
import ImportCategoriesHandler from "./ImportCategoriesHandler";

export default () => {
  // const categoriesRepository = new CategoriesDatabaseRepository();
  const categoriesRepository = CategoriesMemoryRepository.getInstance();
  const importCategoriesUseCase = new ImportCategoriesUseCase(
    categoriesRepository
  );
  const importCategoriesHandler = new ImportCategoriesHandler(
    importCategoriesUseCase
  );
  return importCategoriesHandler;
}
