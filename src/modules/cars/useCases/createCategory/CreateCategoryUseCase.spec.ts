import CategoriesMemoryRepository from "../../repositories/CategoriesMemoryRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import CreateCategoryUseCase from "./CreateCategoryUseCase";
import AppError from "../../../../errors/AppError"

let categoriesRepository: ICategoriesRepository;
let createCategoryUseCase: CreateCategoryUseCase;

describe("Create category", () => {
  beforeEach(()=> {
    categoriesRepository = new CategoriesMemoryRepository();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  });

  it("should be able to create a category", async () => {
    const name = "Mycar name";
    const description = "Mycar description";
    await createCategoryUseCase.execute({name, description});
    const savedCarCategory = await categoriesRepository.findByName(name);
    expect(savedCarCategory).toHaveProperty("id");
    expect(savedCarCategory).toHaveProperty("created_at");
    expect(savedCarCategory.name).toBe(name);
    expect(savedCarCategory.description).toBe(description);
  });

  it("should not create a category if it already exists", async () => {
    await expect(async () => {
      const name = "Mycar name";
      const description = "Mycar description";
      await createCategoryUseCase.execute({name, description});
      await createCategoryUseCase.execute({name, description});
    // }).rejects.toThrow(); // did not work with custom error class AppError
    }).rejects.toBeInstanceOf(AppError);
  });
});