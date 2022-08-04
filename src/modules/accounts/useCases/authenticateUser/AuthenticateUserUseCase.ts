import { compare } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IAuthenticateUserResponse, IAuthenticateUserRequest, IAuthenticateUserUseCase } from "./IAuthenticateUserUseCase";
import { createAuthToken } from "../../../../middleware/createAuthToken"
import AppError from "../../../../errors/AppError";

@injectable()
export default class AuthenticateUserUseCase implements IAuthenticateUserUseCase{
  constructor(@inject("UsersRepository") private usersRepository: IUsersRepository){}

  async execute({email, password}: IAuthenticateUserRequest): Promise<IAuthenticateUserResponse> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      console.log("user not found!");
      throw new AppError("Invalid email or password!", 401);
    }
    const passwordIsValid = await compare(password, user.password)
    if (!passwordIsValid) {
      console.log("password mismatch!");
      throw new AppError("Invalid email or password!", 401);
    }
    
    const token = createAuthToken(user.id);

    console.log(token);

    const authReponse = {
      user: {
        name: user.name, 
        email
      },
      token
    }
    console.log(authReponse);
    return authReponse;
  }
}