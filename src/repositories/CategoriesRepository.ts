import { v4 as uuid } from "uuid";

import Category from "../models/Category";

interface ICreateCategoryDTO {
  name: String;
  description: String;
}

export default class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  create({ name, description }: ICreateCategoryDTO) {
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

  findOne(name: String): Category {
    const category = this.categories.find((category) => category.name === name);
    console.log(`procurando categoria ${name}`);
    return category;
  }

  update() {}

  delete() {}
}
