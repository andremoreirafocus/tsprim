import User from "../../entities/User";
import { IUsersRepository} from "../../entities/IUsersRepository";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO"

export default class UsersMemoryRepository implements IUsersRepository {
  users: User[];

  constructor() {
    this.users = [];
  }

  async create({name, password, email, driver_license}: ICreateUserDTO): Promise<void> {
    const isAdmin = false;
    const user = new User(
      name,
      password,
      email,
      driver_license,
      isAdmin
    )
    this.users.push(user);
  }

  async get(): Promise<User[]> {
    return this.users;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user)=> user.email === email);
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  update() {
    throw new Error("Method not implemented.");
  }

  delete() {
    throw new Error("Method not implemented.");
  }

  async save(user: User): Promise<User> {
    const userIndex = this.users.findIndex((thisUser) => thisUser.id === user.id);
    this.users[userIndex] = user;
    return user;
  }
}