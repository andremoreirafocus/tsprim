import Category from "../../modules/cars/entities/Specification";

interface IListSpecificationsUseCase {
  execute(): Promise<Category[]>;
}

export { IListSpecificationsUseCase };
