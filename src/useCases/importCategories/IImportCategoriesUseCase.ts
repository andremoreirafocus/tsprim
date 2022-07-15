interface IImportCategoriesUseCase {
  execute(categoriesFilePath: string): Promise<void>;
}

export {IImportCategoriesUseCase };
