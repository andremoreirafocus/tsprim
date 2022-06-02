import CategoriesMemoryRepository from "../../modules/cars/repositories/CategoriesMemoryRepository";
import ListCategoriesUseCase from "./listCategoriesUseCase";
import ListCategoriesHandler from "./ListCategoriesHandler";

const categoriesRepository = new CategoriesMemoryRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesHandler = new ListCategoriesHandler(listCategoriesUseCase);

export default listCategoriesHandler;
