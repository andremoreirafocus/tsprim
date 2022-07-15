import { container } from "tsyringe";
import { Router, Request, Response } from "express";
import multer from "multer";
import CreateCategoryController from "../useCases/createCategory/CreateCategoryController";
import ListCategoriesController from "../useCases/listCategories/ListCategoriesController";
import ImportCategoriesController from "../useCases/importCategories/ImportCategoriesController";
import ListCategoriesUseCase from "../useCases/listCategories/ListCategoriesUseCase";
import CreateCategoryUseCase from "../useCases/createCategory/CreateCategoryUseCase"

export default class categoriesRouter {
  upload: multer.Multer;
  categoriesRouter: Router;
  importCategoriesController: ImportCategoriesController;
  createCategoryController: CreateCategoryController;
  listCategoriesController: ListCategoriesController;
  constructor() {
    this.upload = multer({ dest: "uploads/" });
    this.categoriesRouter = Router();
    this.importCategoriesController = new ImportCategoriesController();
    container.register<ListCategoriesUseCase>("ListCategoriesUseCase", ListCategoriesUseCase);
    container.register<CreateCategoryUseCase>("CreateCategoryUseCase", CreateCategoryUseCase);
    this.createCategoryController = container.resolve(CreateCategoryController);
    this.listCategoriesController = container.resolve(ListCategoriesController);
    this.categoriesRouter.post("/", (request: Request, response: Response) => {
      this.createCategoryController.handle(request, response);
    });
    this.categoriesRouter.get("/", (request: Request, response: Response) => {
      this.listCategoriesController.handle(request, response);
    });
    this.categoriesRouter.post(
      "/import",
      this.upload.single("uploaded_file"),
      this.importCategoriesController.handle
    );
  }
}



