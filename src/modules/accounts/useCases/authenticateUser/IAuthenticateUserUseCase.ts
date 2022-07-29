interface IAuthenticateUserRequest {
  email: string,
  password: string
}

interface IAuthenticateUserResponse {
  user: {
    email:string;
    name: string;
  }
  token: string;
}

interface IAuthenticateUserUseCase {
  execute({email, password}: IAuthenticateUserRequest): Promise<IAuthenticateUserResponse>
}

export { IAuthenticateUserUseCase, IAuthenticateUserResponse, IAuthenticateUserRequest }