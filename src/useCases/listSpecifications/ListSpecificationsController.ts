import { Request, Response } from "express";
import { container } from "tsyringe";
import Specification from "../../modules/cars/entities/Specification";
import ListSpecificationsUseCase from "./ListSpecificationsUseCase";

export default class ListSpecificationsController {
  // constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}
  async handle(request: Request, response: Response) {
    const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase)
    const specifications = await listSpecificationsUseCase.execute();
    response.json(specifications);
  }
}
