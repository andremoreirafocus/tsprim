import { v4 as uuid } from "uuid";

import Specification from "../models/Specification";
import { ISpecificationsRepository } from "./ISpecificationsRepository";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export default class SpecificationsRepository
  implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ICreateSpecificationDTO) {
    const specification = new Specification({
      id: uuid(),
      name,
      description,
      created_at: new Date(),
    });
    this.specifications.push(specification);
    console.log(this.specifications);
  }

  get(): Specification[] {
    return this.specifications;
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );
    console.log(`procurando categoria ${name}`);
    return specification;
  }

  update() {}

  delete() {}
}
