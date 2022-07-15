import { Request, Response } from "express";
import { container, inject, injectable } from "tsyringe";
// import Specification from "../../modules/cars/entities/Specification";
import ListSpecificationsUseCase from "./ListSpecificationsUseCase";

@injectable()
export default class ListSpecificationsController {
  constructor(@inject("ListSpecificationsUseCase") private listSpecificationsUseCase: ListSpecificationsUseCase) {}
  async handle(request: Request, response: Response) {
    // const listSpecificationsUseCase = container.resolve(ListSpecificationsUseCase)
    const specifications = await this.listSpecificationsUseCase.execute();
    response.json(specifications);
  }
}
