import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { IAuthenticateUserUseCase } from "./IAuthenticateUserUseCase";

@injectable()
export default class AuthenticateUserController {
  constructor(@inject("AuthenticateUserUseCase") private authenticateUserUseCase: IAuthenticateUserUseCase){}

  async handle(request: Request, response: Response) {
    const {email, password} = request.body;
    try {
      const responseToken = await this.authenticateUserUseCase.execute({email, password});
      return response.status(200).json(responseToken);
    } catch (err) {
      return response.status(500).send(err.message);
    }
  }
}