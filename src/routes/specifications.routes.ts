import { container } from "tsyringe";
import { Router, Request, Response } from "express";
import CreateSpecificationController from "../useCases/createSpecification/CreateSpecificationController";
import ListCategoriesController from "../useCases/listSpecifications/ListSpecificationsController";
import CreateSpecificationUseCase from "../useCases/createSpecification/CreateSpecificationUseCase"
import ListSpecificationsUseCase from "../useCases/listSpecifications/ListSpecificationsUseCase"

export default class SpecificationsRouter{
  router: Router;
  createSpecificationController:  CreateSpecificationController;
  listCategoriesController:  ListCategoriesController;
  constructor() {
    this.router = Router();
    this.registerAndResolve();
    this.addRoutes();
  }    
  registerAndResolve() {
    container.register<ListSpecificationsUseCase>("ListSpecificationsUseCase", ListSpecificationsUseCase);
    container.register<CreateSpecificationUseCase>("CreateSpecificationUseCase", CreateSpecificationUseCase);
    this.createSpecificationController = container.resolve(CreateSpecificationController);
    this.listCategoriesController = container.resolve(ListCategoriesController);
  }
  addRoutes() {
    this.router.post("/", (request: Request, response: Response) => { 
      this.createSpecificationController.handle(request, response)
    });
    this.router.get("/", (request: Request, response: Response) => { 
      this.listCategoriesController.handle(request, response)
    });
  }
}
