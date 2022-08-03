import Category from "../entities/Category";
import { ICategoriesRepository } from "./ICategoriesRepository";
import {getRepository, Repository} from "typeorm";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export default class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>

  constructor() {
    this.repository = getRepository(Category)
  }

  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });
    await this.repository.save(category)
    // console.log(category);
  }

  async get(): Promise<Category[]> {
    const categories = await this.repository.find()
    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = this.repository.findOne({name});
    // console.log(`procurando categoria ${name}`);
    return category;
  }

  update() {}

  delete() {}
}
