import { IAuthenticateUserDTO } from "../../dtos/IAuthenticateUserDTO";

interface IAuthResponse {
  user: {
    email:string;
    name: string;
  }
  token: string;
}

interface IAuthenticateUserUseCase {
  execute({email, password}: IAuthenticateUserDTO): Promise<IAuthResponse>
}

export { IAuthenticateUserUseCase, IAuthResponse }