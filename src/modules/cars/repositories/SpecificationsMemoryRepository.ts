import { v4 as uuid } from "uuid";

import Specification from "../entities/Specification";
import { ISpecificationsRepository } from "./ISpecificationsRepository";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export default class SpecificationsMemoryRepository
  implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }


  async create({ name, description }: ICreateSpecificationDTO) {
    const specification = new Specification({
      id: uuid(),
      name,
      description,
      created_at: new Date(),
    });
    this.specifications.push(specification);
    console.log(this.specifications);
  }

  async get(): Promise<Specification[]> {
    return this.specifications;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    console.log(`procurando categoria ${name}`);
    return specification;
  }

  update() {}

  delete() {}
}
