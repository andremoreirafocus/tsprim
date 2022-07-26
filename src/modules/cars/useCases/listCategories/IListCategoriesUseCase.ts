import Category from "../../entities/Category";

interface IListCategoriesUseCase {
  execute(): Promise<Category[]>;
}

export { IListCategoriesUseCase };
