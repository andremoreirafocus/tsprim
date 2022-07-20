import { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";
import CreateSpecificationUseCase from "./CreateSpecificationUseCase";

@injectable()
export default class CreateSpecificationsController {
  constructor(@inject("CreateSpecificationUseCase") private createSpecificationUseCase: CreateSpecificationUseCase) {}
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;
    // const createSpecificationUseCase = container.resolve(CreateSpecificationUseCase);
    try {
      // await createSpecificationUseCase.execute({ name, description });
      await this.createSpecificationUseCase.execute({ name, description });
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
    return response.status(201).send();
  }
}
