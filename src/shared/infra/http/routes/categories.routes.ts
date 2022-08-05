import { container } from "tsyringe";
import { Router, Request, Response } from "express";
import { fileUploader, FileUploader } from "../middleware/fileAPI";
import CreateCategoryController from "../../../../modules/cars/useCases/createCategory/CreateCategoryController";
import ListCategoriesController from "../../../../modules/cars/useCases/listCategories/ListCategoriesController";
import ImportCategoriesController from "../../../../modules/cars/useCases/importCategories/ImportCategoriesController";
import ListCategoriesUseCase from "../../../../modules/cars/useCases/listCategories/ListCategoriesUseCase";
import CreateCategoryUseCase from "../../../../modules/cars/useCases/createCategory/CreateCategoryUseCase"
import ImportCategoriesUseCase from "../../../../modules/cars/useCases/importCategories/ImportCategoriesUseCase"
import EnsureAuthentication from "../middleware/EnsureAuthetication/EnsureAuthetication"
import config from "../../../config";

export default class CategoriesRouter {
  fileUploader: FileUploader;
  router: Router;
  importCategoriesController: ImportCategoriesController;
  createCategoryController: CreateCategoryController;
  listCategoriesController: ListCategoriesController;
  ensureAuthentication: EnsureAuthentication;
  constructor() {
    this.fileUploader = fileUploader(config.importCategoriesFolder);
    this.router = Router();
    this.registerAndResolve();
    this.addRoutes();
  }
  registerAndResolve(){
    this.ensureAuthentication = container.resolve(EnsureAuthentication);
    container.register<ImportCategoriesUseCase>("ImportCategoriesUseCase", ImportCategoriesUseCase);
    container.register<ListCategoriesUseCase>("ListCategoriesUseCase", ListCategoriesUseCase);
    container.register<CreateCategoryUseCase>("CreateCategoryUseCase", CreateCategoryUseCase);
    this.createCategoryController = container.resolve(CreateCategoryController);
    this.listCategoriesController = container.resolve(ListCategoriesController);
    this.importCategoriesController = container.resolve(ImportCategoriesController);
  }
  addRoutes() {
    this.router.use(this.ensureAuthentication.handle);
    this.router.post("/", (request: Request, response: Response) => {
      this.createCategoryController.handle(request, response);
    });
    this.router.get("/", (request: Request, response: Response) => {
      this.listCategoriesController.handle(request, response);
    });
    this.router.post(
      "/import",
      this.fileUploader.single("file"),  (request: Request, response: Response) => {
      this.importCategoriesController.handle(request, response);
    });
  }
}



