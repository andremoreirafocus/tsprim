import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IAuthenticateUserResponse, IAuthenticateUserRequest, IAuthenticateUserUseCase } from "./IAuthenticateUserUseCase";

import config from "../../../../config"
import AppError from "../../../../errors/AppError";

@injectable()
export default class AuthenticateUserUseCase implements IAuthenticateUserUseCase{
  constructor(@inject("UsersRepository") private usersRepository: IUsersRepository){}

  async execute({email, password}: IAuthenticateUserRequest): Promise<IAuthenticateUserResponse> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user)
      throw new AppError("Invalid email or password!", 401);
    const passwordIsValid = await compare(password, user.password)
    if (!passwordIsValid)
      throw new AppError("Invalid email or password!", 401);
    
    const token = sign({}, config.auth.MD5_HASH,
      { subject: user.id, expiresIn: '1d' }
    );
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