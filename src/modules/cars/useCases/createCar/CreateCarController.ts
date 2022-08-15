import { Request, Response } from "express";
import AppError from "../../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import{ ICreateCarUseCase } from "./ICreateCarUseCase";

@injectable()
export default class CreateCarController {
  constructor(@inject("CreateCarUseCase") private createCarUseCase: ICreateCarUseCase){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, daily_rate, license_plate, fine_amount, brand, category_id } = request.body;
    try {
      await this.createCarUseCase.execute({name, description, daily_rate, license_plate, fine_amount, brand, category_id });
    } catch(err) {
      if (err instanceof AppError)
        return response.status(err.statusCode).send(err.message);
      return response.status(500).send(`Internal server error - ${err.message}`);
    }
    return response.status(201).send();
  }
}