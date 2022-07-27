import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IAuthenticateUserDTO } from "../../dtos/IAuthenticateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { IAuthResponse, IAuthenticateUserUseCase } from "./IAuthenticateUserUseCase";

const MD5_HASH = "05c71bfcc63f122c5afeaec899d0c248";

@injectable()
export default class AuthenticateUserUseCase implements IAuthenticateUserUseCase{
  constructor(@inject("UsersRepository") private usersRepository: IUsersRepository){}

  async execute({email, password}: IAuthenticateUserDTO): Promise<IAuthResponse> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user)
      throw new Error("Invalid email or password!");
    const passwordIsValid = await compare(password, user.password)
    if (!passwordIsValid)
      throw new Error("Invalid email or password!");
    
    const token = sign(
      {
        // email,
        // name: user.name
      }, 
      MD5_HASH,
      { subject: user.id,
        expiresIn: '1d' 
      }
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