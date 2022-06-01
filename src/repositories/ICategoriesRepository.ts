import Category from "../models/Category";

interface ICreateCategoryDTO {
  name: String;
  description: String;
}

interface ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void;
  get(): Category[];
  findByName(name: String): Category;
  update(): void;
  delete(): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
