import Specification from "../models/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../repositories/ISpecificationsRepository";

export default class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute({ name, description }: ICreateSpecificationDTO): void {
    const foundSpecification: Specification = this.checkIfAlreadyExists(name);
    if (foundSpecification) {
      throw new Error("Specification already exists!");
    }

    this.specificationsRepository.create({ name, description });
  }

  checkIfAlreadyExists(name: string): Specification | undefined {
    const category: Specification = this.specificationsRepository.findByName(
      name
    );
    return category;
  }
}
