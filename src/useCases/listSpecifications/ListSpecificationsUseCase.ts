import { inject, injectable } from "tsyringe";
import Specification from "../../modules/cars/entities/Specification";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { IListSpecificationsUseCase } from "./IListSpecificationsUseCase";

@injectable()
export default class ListSpecificationsUseCase
  implements IListSpecificationsUseCase {
  constructor(@inject("SpecificationsRepository") private specificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    const specifications: Specification[] = this.specificationsRepository.get();
    return specifications;
  }
}
