import Category from "../../modules/cars/entities/Specification";

interface IListSpecificationsUseCase {
  execute(): Category[];
}

export { IListSpecificationsUseCase };
