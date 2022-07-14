import Specification from "../entities/Specification";

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  get(): Promise<Specification[]>
  findByName(name: string): Promise<Specification>;
  update(): void;
  delete(): void;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
