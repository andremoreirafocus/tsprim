// import CategoriesMemoryRepository from "../../modules/cars/repositories/CategoriesMemoryRepository";
import CategoriesDatabaseRepository from "../../modules/cars/repositories/CategoriesDatabaseRepository"
import ListCategoriesUseCase from "./ListCategoriesUseCase";
import ListCategoriesHandler from "./ListCategoriesHandler";

// const categoriesRepository = CategoriesMemoryRepository.getInstance();
export default () => {
  const categoriesRepository = new CategoriesDatabaseRepository();
  const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
  const listCategoriesHandler = new ListCategoriesHandler(listCategoriesUseCase);
  return listCategoriesHandler
}
// export default listCategoriesHandler;
