import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";

interface ICreateUserUseCase {
  execute ({name, password, email, driver_license}: ICreateUserDTO): Promise<void>
}

export { ICreateUserUseCase };