import { Request, Response } from "express";
// import { ICreateCategoryUseCase } from "./ICreateCategoryUseCase";
import CreateCategoryUseCase from "./CreateCategoryUseCase";
import { container } from "tsyringe";

export default class CreateCategoryController {
  // constructor(private createCategoryUseCase: ICreateCategoryUseCase) {}
  
  handle(request: Request, response: Response): Response {
    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    const { name, description } = request.body;
    try {
      createCategoryUseCase.execute({ name, description });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
    return response.status(201).send();
  }
}
