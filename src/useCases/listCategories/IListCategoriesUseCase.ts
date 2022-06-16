import Category from "../../modules/cars/entities/Category";

interface IListCategoriesUseCase {
  execute(): Category[];
}

export { IListCategoriesUseCase };
