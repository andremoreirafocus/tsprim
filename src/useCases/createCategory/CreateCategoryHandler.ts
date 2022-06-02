import { Request, Response } from "express";
import CreateCategoryUseCase from "./CreateCategoryUseCase";

export default class CreateCategoryHandler {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {
    console.log(`Criei controller com use case ${createCategoryUseCase}`);
  }

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
