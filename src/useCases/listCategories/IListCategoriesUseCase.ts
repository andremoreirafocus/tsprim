import Category from "../../modules/cars/models/Category";

interface IListCategoriesUseCase {
  execute(): Category[];
}

export { IListCategoriesUseCase };
