import { Request, Response } from "express";
import CreateSpecificationUseCase from "./CreateSpecificationUseCase";

export default class CreateSpecificationsHandler {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    try {
      this.createSpecificationUseCase.execute({ name, description });
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
    return response.status(201).send();
  }
}
