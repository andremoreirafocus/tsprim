import { Request,
  Response } from "express";
import { ICreateUserUseCase } from "./ICreateUserUseCase";

export default class CreateUserController {
  constructor(private createUserUseCase: ICreateUserUseCase){}

  async handle(request: Request, response: Response) {
    const { name, username, password, email, driver_license } = request.body;
    try {
      await this.createUserUseCase.execute({
        name,
        username,
        password,
        email,
        driver_license
      })
      return response.status(201).send();
    } catch(err) {
      return response.status(500).json({error: err.message})
    }
  }
}