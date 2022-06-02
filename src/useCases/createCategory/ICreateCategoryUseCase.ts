interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICreateCategoryUseCase {
  execute({ name, description }: ICreateCategoryDTO): void;
}

export { ICreateCategoryDTO, ICreateCategoryUseCase };
