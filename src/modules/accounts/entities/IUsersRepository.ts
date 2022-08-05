import User from "../entities/User"
import {ICreateUserDTO} from "../dtos/ICreateUserDTO"

interface IUsersRepository {
  create(userProperties:ICreateUserDTO): Promise<void>
  get(): Promise<User[]>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
  save(user: User): Promise<User>
  update()
  delete()
}

export { IUsersRepository }