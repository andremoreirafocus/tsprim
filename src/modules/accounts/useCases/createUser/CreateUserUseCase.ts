import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserUseCase } from "./ICreateUserUseCase";

export default class CreateUserUseCase implements ICreateUserUseCase
{
  constructor(private repository: IUsersRepository) {
  }

  async execute({ name, username, password, email, driver_license }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = this.checkIfUserAlreadyExists(username)
    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }
    await this.repository.create({
      name, 
      username, 
      password, 
      email, 
      driver_license,
    });
  }

  async checkIfUserAlreadyExists(username: string) {
    const userAlreadyExists = await this.repository.findByUsername(username);
    return userAlreadyExists;
  }
}