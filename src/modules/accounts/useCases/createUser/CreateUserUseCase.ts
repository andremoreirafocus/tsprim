import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserUseCase } from "./ICreateUserUseCase";

@injectable()
export default class CreateUserUseCase implements ICreateUserUseCase
{
  constructor(@inject("UsersRepository") private usersRepository: IUsersRepository) {
  }

  async execute({ name, username, password, email, driver_license }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = this.checkIfUserAlreadyExists(username)
    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }
    await this.usersRepository.create({
      name, 
      username, 
      password, 
      email, 
      driver_license,
    });
  }

  async checkIfUserAlreadyExists(username: string) {
    const user = await this.usersRepository.findByUsername(username);
    const alreadyExists = !!user;
    return alreadyExists;
  }
}