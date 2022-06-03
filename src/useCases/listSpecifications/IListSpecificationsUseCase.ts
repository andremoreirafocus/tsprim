import Category from "../../modules/cars/models/Specification";

interface IListSpecificationsUseCase {
  execute(): Category[];
}

export { IListSpecificationsUseCase };
