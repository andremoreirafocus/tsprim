import Category from "./Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
  get(): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
  update(): void;
  delete(): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
