import Category from "../../entities/Specification";

interface IListSpecificationsUseCase {
  execute(): Promise<Category[]>;
}

export { IListSpecificationsUseCase };
