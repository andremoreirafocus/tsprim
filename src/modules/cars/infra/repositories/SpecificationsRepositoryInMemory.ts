import Specification from "../../entities/Specification";
import { ISpecificationsRepository } from "../../entities/ISpecificationsRepository";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export default class SpecificationsRepositoryInMemory
  implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }


  async create({ name, description }: ICreateSpecificationDTO) {
    const created_at = new Date();
    const specification = new Specification(
      name,
      description,
      created_at,
    );
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
