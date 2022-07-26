import { container } from "tsyringe";
import { Router, Request, Response } from "express";
import multer from "multer";
import CreateCategoryController from "../modules/cars/useCases/createCategory/CreateCategoryController";
import ListCategoriesController from "../modules/cars/useCases/listCategories/ListCategoriesController";
import ImportCategoriesController from "../modules/cars/useCases/importCategories/ImportCategoriesController";
import ListCategoriesUseCase from "../modules/cars/useCases/listCategories/ListCategoriesUseCase";
import CreateCategoryUseCase from "../modules/cars/useCases/createCategory/CreateCategoryUseCase"
import ImportCategoriesUseCase from "../modules/cars/useCases/importCategories/ImportCategoriesUseCase"

export default class CategoriesRouter {
  upload: multer.Multer;
  router: Router;
  importCategoriesController: ImportCategoriesController;
  createCategoryController: CreateCategoryController;
  listCategoriesController: ListCategoriesController;
  constructor() {
    this.upload = multer({ dest: "uploads/" });
    this.router = Router();
    this.registerAndResolve();
    this.addRoutes();
  }
  registerAndResolve(){
    container.register<ImportCategoriesUseCase>("ImportCategoriesUseCase", ImportCategoriesUseCase);
    container.register<ListCategoriesUseCase>("ListCategoriesUseCase", ListCategoriesUseCase);
    container.register<CreateCategoryUseCase>("CreateCategoryUseCase", CreateCategoryUseCase);
    this.createCategoryController = container.resolve(CreateCategoryController);
    this.listCategoriesController = container.resolve(ListCategoriesController);
    this.importCategoriesController = container.resolve(ImportCategoriesController);
  }
  addRoutes() {
    this.router.post("/", (request: Request, response: Response) => {
      this.createCategoryController.handle(request, response);
    });
    this.router.get("/", (request: Request, response: Response) => {
      this.listCategoriesController.handle(request, response);
    });
    this.router.post(
      "/import",
      this.upload.single("file"),  (request: Request, response: Response) => {
      this.importCategoriesController.handle(request, response);
      });
  }
}



