import { ICreateSpecificationDTO } from "../../infra/repositories/ISpecificationsRepository";

interface ICreateSpecificationUseCase {
  execute({ name, description }: ICreateSpecificationDTO): Promise<void>;
}

export { ICreateSpecificationUseCase };
