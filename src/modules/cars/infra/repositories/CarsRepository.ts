import { getRepository, Repository } from "typeorm";
import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import Car from "../../entities/Car";
import { ICarsRepository } from "../../entities/ICarsRepository";

export default class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;
  constructor() {
    this.repository = getRepository(Car);
  }
  async create({
    name, 
    description, 
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id
   }: ICreateCarDTO): Promise<void> {
    
    const car = this.repository.create({
      name, 
      description, 
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id
    });

    await this.repository.save(car);

  }
  get(): Promise<Car[]> {
    throw new Error("Method not implemented.");
  }
  findByCategory(category: string): Promise<Car[]> {
    throw new Error("Method not implemented.");
  }
  findByBrand(brand: string): Promise<Car[]> {
    throw new Error("Method not implemented.");
  }
  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOne({license_plate})
    return car;
  }

}