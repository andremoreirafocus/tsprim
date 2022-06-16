import Category from "../../modules/cars/entities/Category";

interface IListCategoriesUseCase {
  execute(): Promise<Category[]>;
}

export { IListCategoriesUseCase };
