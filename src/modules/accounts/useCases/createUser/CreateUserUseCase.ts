import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../entities/IUsersRepository";
import { ICreateUserUseCase } from "./ICreateUserUseCase";
import { createHashPassword } from "../../../../shared/infra/http/middleware/createHashPassword";
import AppError from "../../../../shared/errors/AppError";

@injectable()
export default class CreateUserUseCase implements ICreateUserUseCase
{
  constructor(@inject("UsersRepository") private usersRepository: IUsersRepository) {
  }

  async execute({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.checkIfUserAlreadyExists(email)
    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }
    const hashPassword = await createHashPassword(password);
    await this.usersRepository.create({
      name, 
      password: hashPassword, 
      email, 
      driver_license,
    });
  }

  async checkIfUserAlreadyExists(email: string) {
    const user = await this.usersRepository.findByEmail(email);
    const alreadyExists = !!user;
    return alreadyExists;
  }
}