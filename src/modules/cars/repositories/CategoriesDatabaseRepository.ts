import { v4 as uuid } from "uuid";

import Category from "../entities/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";

import {getRepository, Repository} from "typeorm";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export default class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>
  // private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  constructor() {
    // this.categories = [];
    this.repository = getRepository(Category)
  }

  // static getInstance() {
  //   if (!this.INSTANCE) {
  //     this.INSTANCE = new CategoriesRepository();
  //   }
  //   return this.INSTANCE;
  // }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });
    this.repository.save(category)
    console.log(category);
  }

  async get(): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = this.repository.findOne({name});
    console.log(`procurando categoria ${name}`);
    return category;
  }

  update() {}

  delete() {}
}
