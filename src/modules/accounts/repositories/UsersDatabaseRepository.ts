import User from "../entities/User";
import { IUsersRepository} from "./IUsersRepository";
import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO"

export default class UsersDatabaseRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  
  async create({name, username, password, email, driver_license}: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      password,
      email,
      driver_license,
    })
    await this.repository.save(user);
  }

  async get(): Promise<User[]> {
    const users = await this.repository.find();
    return users;
  }

  async findByUsername(username: string): Promise<User> {
    const users = await this.repository.findOne(username);
    return users;
  }

  update() {
    throw new Error("Method not implemented.");
  }

  delete() {
    throw new Error("Method not implemented.");
  }
}