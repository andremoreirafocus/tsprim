import { ICreateSpecificationDTO } from "../../modules/cars/repositories/ISpecificationsRepository";

interface ICreateSpecificationUseCase {
  execute({ name, description }: ICreateSpecificationDTO): void;
}

export { ICreateSpecificationUseCase };
