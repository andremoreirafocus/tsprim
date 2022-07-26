import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { ICreateUserUseCase } from "./ICreateUserUseCase";

@injectable()
export default class CreateUserController {
  constructor(@inject("CreateUserUseCase") private createUserUseCase: ICreateUserUseCase){}

  async handle(request: Request, response: Response) {
    const { name, username, password, email, driver_license } = request.body;
    try {
      await this.createUserUseCase.execute({
        name,
        username,
        password,
        email,
        driver_license
      });
    } catch(err) {
      return response.status(500).json({error: err.message})
    }
    return response.status(201).send();
  }
}