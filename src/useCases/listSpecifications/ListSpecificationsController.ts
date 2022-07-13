import { Request, Response } from "express";
import { container } from "tsyringe";
import Specification from "../../modules/cars/entities/Specification";
import ListSpecificationsUseCase from "./ListSpecificationsUseCase";

export default class ListSpecificationsController {
  // constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}
  handle(request: Request, response: Response): void {
    const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase)
    const specifications: Specification[] = listSpecificationsUseCase.execute();
    response.json(specifications);
  }
}
