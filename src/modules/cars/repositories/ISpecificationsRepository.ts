import Specification from "../models/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  get(): Specification[];
  findByName(name: string): Specification;
  update(): void;
  delete(): void;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
