import User from "../entities/User";
import { IUsersRepository} from "./IUsersRepository";
import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO"

export default class UsersDatabaseRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({name, password, email, driver_license}: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
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

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({email});
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

  update() {
    throw new Error("Method not implemented.");
  }

  delete() {
    throw new Error("Method not implemented.");
  }
}