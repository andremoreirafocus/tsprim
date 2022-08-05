import { getRepository, Repository } from "typeorm";
import Specification from "../../entities/Specification";
import { ISpecificationsRepository } from "../../entities/ISpecificationsRepository";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export default class SpecificationsMemoryRepository
  implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO) {
    const specification = this.repository.create({
      name,
      description,
    });
    await this.repository.save(specification)
    console.log(specification);
  }

  async get(): Promise<Specification[]> {
    const specifications = await this.repository.find();
    return specifications;
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({name});
    console.log(`procurando especificação ${name}`);
    return specification;
  }

  update() {}

  delete() {}
}
