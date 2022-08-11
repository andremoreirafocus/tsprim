import AppError from "../../../../shared/errors/AppError";
import CarsMemoryRepository from "../../infra/repositories/CarsRepositoryInMemory";
import CreateCarUseCase from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsMemoryRepository;
describe("Create car use case tests",() => {
  beforeEach(()=> {
    carsRepository = new CarsMemoryRepository();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });

  it("should be able to create a car", async () => {
    const carDTO = {
      name: "MyCarName", 
      description: "MyCarDescription", 
      daily_rate: 80,
      license_plate: "MyLicense",
      fine_amount: 20,
      brand: "MyBrand",
      category_id: "category_id"
    }
    await createCarUseCase.execute(carDTO);
    const car = await carsRepository.findByLicensePlate(carDTO.license_plate);
    expect(car.name).toBe(carDTO.name);
    expect(car.description).toBe(carDTO.description);
    expect(car.daily_rate).toBe(carDTO.daily_rate);
    expect(car.license_plate).toBe(carDTO.license_plate);
    expect(car.fine_amount).toBe(carDTO.fine_amount);
    expect(car.brand).toBe(carDTO.brand);
    expect(car.category_id).toBe(carDTO.category_id);
  });

  it("should not be able to create a car if there is a car with the same license plate", async () => {
    const carDTO = {
      name: "MyCarName", 
      description: "MyCarDescription", 
      daily_rate: 80,
      license_plate: "MyLicense",
      fine_amount: 20,
      brand: "MyBrand",
      category_id: "category_id"
    }
    await createCarUseCase.execute(carDTO);
    expect(async ()=> {
      await createCarUseCase.execute(carDTO);
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to create a car and it should be available", async () => {
    const carDTO = {
      name: "MyCarName", 
      description: "MyCarDescription", 
      daily_rate: 80,
      license_plate: "MyLicense",
      fine_amount: 20,
      brand: "MyBrand",
      category_id: "category_id"
    }
    await createCarUseCase.execute(carDTO);
    const car = await carsRepository.findByLicensePlate(carDTO.license_plate);
    expect(car.name).toBe(carDTO.name);
    expect(car.description).toBe(carDTO.description);
    expect(car.daily_rate).toBe(carDTO.daily_rate);
    expect(car.license_plate).toBe(carDTO.license_plate);
    expect(car.fine_amount).toBe(carDTO.fine_amount);
    expect(car.brand).toBe(carDTO.brand);
    expect(car.category_id).toBe(carDTO.category_id);
    expect(car.available).toBe(true);
  });


})