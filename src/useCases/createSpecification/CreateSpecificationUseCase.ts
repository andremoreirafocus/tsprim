import { inject, injectable } from "tsyringe";
// import Specification from "../../modules/cars/entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "../../modules/cars/repositories/ISpecificationsRepository";
import { ICreateSpecificationUseCase } from "./ICreateSpecificationUseCase";

@injectable()
export default class CreateSpecificationUseCase
  implements ICreateSpecificationUseCase {
  constructor(@inject("SpecificationsRepository") private specificationsRepository: ISpecificationsRepository) {}

  async execute({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specificationAlreadyExists = await this.checkIfAlreadyExists(name);
    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.specificationsRepository.create({ name, description });
  }

  async checkIfAlreadyExists(name: string): Promise<boolean> {
    const specification = await this.specificationsRepository.findByName(
      name
    );
    const alreadyExists = !!specification;
    return alreadyExists;
  }
}
