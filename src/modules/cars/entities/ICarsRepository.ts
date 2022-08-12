import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import Car from "./Car";

interface ICarsRepository {
  create(carData: ICreateCarDTO): Promise<void>
  get(): Promise<Car[]>
  findByCategory(category: string): Promise<Car[]>
  findByBrand(brand: string): Promise<Car[]>
  findByLicensePlate(license_plate: string): Promise<Car>
}

export { ICarsRepository }