import Specification from "../../modules/cars/models/Specification";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";
import { IListSpecificationsUseCase } from "./IListSpecificationsUseCase";

export default class ListSpecificationsUseCase
  implements IListSpecificationsUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    const specifications: Specification[] = this.specificationsRepository.get();
    return specifications;
  }
}
