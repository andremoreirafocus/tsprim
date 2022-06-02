import CategoriesMemoryRepository from "../../modules/cars/repositories/CategoriesMemoryRepository";
import CreateCategoryUseCase from "./CreateCategoryUseCase";
import CreateCategoryHandler from "./CreateCategoryHandler";

const categoriesRepository = CategoriesMemoryRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryHandler = new CreateCategoryHandler(createCategoryUseCase);

export default createCategoryHandler;
