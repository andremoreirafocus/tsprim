import CategoriesDatabaseRepository from "../../modules/cars/repositories/CategoriesDatabaseRepository"
import CreateCategoryUseCase from "./CreateCategoryUseCase";
import CreateCategoryHandler from "./CreateCategoryHandler";

export default () => {
  const categoriesRepository = new CategoriesDatabaseRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  const createCategoryHandler = new CreateCategoryHandler(createCategoryUseCase);

  return createCategoryHandler;
}

