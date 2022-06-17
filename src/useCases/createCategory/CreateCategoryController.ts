// import CategoriesDatabaseeRepository from "../../modules/cars/repositories/CategoriesDatabaseRepository"
import CategoriesMemoryRepository from "../../modules/cars/repositories/CategoriesMemoryRepository"
import CreateCategoryUseCase from "./CreateCategoryUseCase";
import CreateCategoryHandler from "./CreateCategoryHandler";

export default () => {
  // const categoriesDatabaseRepository = new CategoriesRepository();
  const categoriesRepository = CategoriesMemoryRepository.getInstance();
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  const createCategoryHandler = new CreateCategoryHandler(createCategoryUseCase);

  return createCategoryHandler;
}

