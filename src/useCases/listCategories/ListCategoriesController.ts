import CategoriesMemoryRepository from "../../modules/cars/repositories/CategoriesMemoryRepository";
import ListCategoriesUseCase from "./ListCategoriesUseCase";
import ListCategoriesHandler from "./ListCategoriesHandler";

const categoriesRepository = CategoriesMemoryRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesHandler = new ListCategoriesHandler(listCategoriesUseCase);

export default listCategoriesHandler;