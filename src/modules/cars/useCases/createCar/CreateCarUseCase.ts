import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppError";
import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { ICarsRepository } from "../../entities/ICarsRepository";

@injectable()
export default class CreateCarUseCase {
  constructor(@inject("CarsRepository") private carsRepository: ICarsRepository){}

  async execute({name, description, daily_rate, license_plate, fine_amount, brand, category_id}: ICreateCarDTO): Promise<void> {
    const carAlreadyExists = await this.checkIfAlreadyExists(license_plate);
    // console.log("2",carAlreadyExists);
    if (carAlreadyExists) {
      console.log("Car already exists")
      throw new AppError("Car already exists");
    }
    await this.carsRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id
    });    // const car = await this.carsRepository.findByLicensePlate(license_plate);
  }

  async checkIfAlreadyExists (license_plate: string): Promise<boolean> {
    const car = await this.carsRepository.findByLicensePlate(license_plate);
    // console.log(car);
    const carAlreadyExists = !!car;
    // console.log(carAlreadyExists);
    return carAlreadyExists;
  }

}