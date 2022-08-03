import CategoriesMemoryRepository from "../../repositories/CategoriesMemoryRepository";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

let categoriesRepository: ICategoriesRepository;
let createCategoryUseCase: CreateCategoryUseCase;

describe("Create category", () => {
  beforeEach(()=> {
    categoriesRepository = CategoriesMemoryRepository.getInstance();
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

});