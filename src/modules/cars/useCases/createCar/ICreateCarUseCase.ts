import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";

interface ICreateCarUseCase {
   execute({name, description, daily_rate, license_plate, fine_amount, brand, category_id}: ICreateCarDTO): Promise<void> 
}

export { ICreateCarUseCase }