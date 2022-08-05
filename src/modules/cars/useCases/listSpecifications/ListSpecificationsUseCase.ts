import { inject, injectable } from "tsyringe";
import { ISpecificationsRepository } from "../../entities/ISpecificationsRepository";
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
