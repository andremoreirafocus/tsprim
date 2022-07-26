import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserUseCase } from "./ICreateUserUseCase";
import { hash } from "bcrypt"

@injectable()
export default class CreateUserUseCase implements ICreateUserUseCase
{
  constructor(@inject("UsersRepository") private usersRepository: IUsersRepository) {
  }

  async execute({ name, password, email, driver_license }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.checkIfUserAlreadyExists(email)
    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }
    const salt = 8;
    const hashPassword = await hash(password, salt)
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