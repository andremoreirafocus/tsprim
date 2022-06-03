import { Request, Response } from "express";
import Specification from "../../modules/cars/models/Specification";
import ListSpecificationsUseCase from "./ListSpecificationsUseCase";

export default class ListSpecificationsHandler {
  constructor(private listSpecificationsUseCase: ListSpecificationsUseCase) {}
  handle(request: Request, response: Response): void {
    const specifications: Specification[] = this.listSpecificationsUseCase.execute();
    response.json(specifications);
  }
}
