import Specification from "../../modules/cars/models/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../../modules/cars/repositories/ISpecificationsRepository";
import { ICreateSpecificationUseCase } from "./ICreateSpecificationUseCase";

export default class CreateSpecificationUseCase
  implements ICreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): void {
    const specificationAlreadyExists = this.checkIfAlreadyExists(name);
    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specificationsRepository.create({ name, description });
  }

  checkIfAlreadyExists(name: string): boolean {
    const specification: Specification = this.specificationsRepository.findByName(
      name
    );
    const alreadyExists = !!specification;
    return alreadyExists;
  }
}
