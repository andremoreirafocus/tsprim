import Specification from "../models/Specification";
import {
  ISpecificationsRepository,
  ICreateSpecificationDTO,
} from "../repositories/ISpecificationsRepository";

export default class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) {}
  execute({ name, description }: ICreateSpecificationDTO): void {
    const specificationAlreadyExists: boolean = this.checkIfAlreadyExists(name);
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
