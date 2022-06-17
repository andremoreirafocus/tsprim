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

  async create({ name, description }: ICreateCategoryDTO) {
    const created_at = new Date();
    const category = new Category(
      name,
      description,
      created_at,
    );
    this.categories.push(category);
    console.log(this.categories);
  }

  async get(): Promise<Category[]> {
    return this.categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);
    console.log(`procurando categoria ${name}`);
    return category;
  }

  update() {}

  delete() {}
}
