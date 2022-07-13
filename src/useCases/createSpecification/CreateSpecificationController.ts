import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateSpecificationUseCase from "./CreateSpecificationUseCase";

export default class CreateSpecificationsController {
  // constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);
    try {
      createSpecificationUseCase.execute({ name, description });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
    return response.status(201).send();
  }
}
