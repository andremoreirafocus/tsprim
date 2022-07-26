import { Request, Response } from "express";
import { ICreateCategoryUseCase } from "./ICreateCategoryUseCase";
// import CreateCategoryUseCase from "./CreateCategoryUseCase";
import { container, inject, injectable } from "tsyringe";

@injectable()
export default class CreateCategoryController {
  constructor(@inject("CreateCategoryUseCase") private createCategoryUseCase: ICreateCategoryUseCase) {}
  
  async handle(request: Request, response: Response) {
    // const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    const { name, description } = request.body;
    try {
      await this.createCategoryUseCase.execute({ name, description });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
    return response.status(201).send();
  }
}
