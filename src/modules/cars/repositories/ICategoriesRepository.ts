import Category from "../models/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  get(): Category[];
  findByName(name: string): Category;
  update(): void;
  delete(): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
