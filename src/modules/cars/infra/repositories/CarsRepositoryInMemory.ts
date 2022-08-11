import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import Car from "../../entities/Car";
import { ICarsRepository } from "../../entities/ICarsRepository";

export default class CarsRepositoryInMemory implements ICarsRepository{
  cars: Car[];

  constructor(){
    this.cars = [];
  }
  async create({name, description, daily_rate, license_plate, fine_amount, brand, category_id}: ICreateCarDTO): Promise<Car> {
    const car = new Car(
      name, 
      description, 
      daily_rate, 
      license_plate,
      fine_amount,
      brand,
      category_id,
    );
    this.cars.push(car);
    return car;
  }
  
  async get(): Promise<Car[]> {
    return this.cars;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = this.cars.find((car) => car.license_plate === license_plate);
    return car;
  }
  
  findByCategory(category: string): Promise<Car[]> {
    throw new Error("Method not implemented.");
  }

  async findByBrand(brand: string): Promise<Car[]> {
    const cars = this.cars.map((car) => { 
      if (car.brand === brand)
        return car;
    });
    return cars;
  }

}