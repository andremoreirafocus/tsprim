import { Request, Response } from "express";
import { ICreateCategoryUseCase } from "./ICreateCategoryUseCase";

export default class CreateCategoryHandler {
  constructor(private createCategoryUseCase: ICreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    try {
      this.createCategoryUseCase.execute({ name, description });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
    return response.status(201).send();
  }
}
