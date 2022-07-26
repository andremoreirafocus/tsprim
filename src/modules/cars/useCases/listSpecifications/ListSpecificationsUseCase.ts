import { inject, injectable } from "tsyringe";
import Specification from "../../entities/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";
import { IListSpecificationsUseCase } from "./IListSpecificationsUseCase";

@injectable()
export default class ListSpecificationsUseCase
  implements IListSpecificationsUseCase {
  constructor(@inject("SpecificationsRepository") private specificationsRepository: ISpecificationsRepository) {}

  async execute() {
    const specifications = await this.specificationsRepository.get();
    return specifications;
  }
}
