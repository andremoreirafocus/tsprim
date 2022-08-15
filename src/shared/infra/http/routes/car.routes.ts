import { container } from "tsyringe";
import { Router, Request, Response } from "express";
import { fileUploader, FileUploader } from "../middleware/fileAPI";
import CreateCarController from "../../../../modules/cars/useCases/createCar/CreateCarController";
import CreateCarUseCase from "../../../../modules/cars/useCases/createCar/CreateCarUseCase"
import EnsureAuthentication from "../middleware/EnsureAuthetication/EnsureAuthetication"
import config from "../../../config";

export default class CategoriesRouter {
  fileUploader: FileUploader;
  router: Router;
  createCarController: CreateCarController;
  ensureAuthentication: EnsureAuthentication;
  constructor() {
    this.fileUploader = fileUploader(config.importCategoriesFolder);
    this.router = Router();
    this.registerAndResolve();
    this.addRoutes();
  }
  registerAndResolve(){
    this.ensureAuthentication = container.resolve(EnsureAuthentication);
    container.register<CreateCarUseCase>("CreateCarUseCase", CreateCarUseCase);
    this.createCarController = container.resolve(CreateCarController);
  }
  addRoutes() {
    this.router.use(this.ensureAuthentication.handle);
    this.router.post("/", (request: Request, response: Response) => {
      this.createCarController.handle(request, response);
    });
  }
}



