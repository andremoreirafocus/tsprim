import { v4 as uuid } from "uuid";

import Category from "../models/Category";
import ICreateCategoryDTO from "./ICreateCategoryDTO";

export default class CategoriesRepository {
  private categories: Category[];
  constructor() {
    this.categories = [];
  }

  validate({ name, description }: ICreateCategoryDTO): boolean {
    const categoryAlreadyExists = this.categories.some(
      (category) => category.name === name
    );
    const isValid = !categoryAlreadyExists;
    return isValid;
  }

  create({ name, description }: ICreateCategoryDTO) {
    const categoryIsValid = this.validate({ name, description });
    if (!categoryIsValid) {
      throw new Error("Category already exists!");
    }
    const category = new Category({
      id: uuid(),
      name,
      description,
      created_at: new Date(),
    });
    this.categories.push(category);
    console.log(this.categories);
  }

  get(): Category[] {
    return this.categories;
  }

  update() {}

  delete() {}

  find() {}
}
