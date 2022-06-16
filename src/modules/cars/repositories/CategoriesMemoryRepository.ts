import { v4 as uuid } from "uuid";

import Category from "../entities/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export default class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  static getInstance() {
    if (!this.INSTANCE) {
      this.INSTANCE = new CategoriesRepository();
    }
    return this.INSTANCE;
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

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    console.log(`procurando categoria ${name}`);
    return category;
  }

  update() {}

  delete() {}
}
