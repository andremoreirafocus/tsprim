import { Router } from "express";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const categoriesRouter = Router();

import CreateCategoryController from "../useCases/createCategory/CreateCategoryController";
import ListCategoriesController from "../useCases/listCategories/ListCategoriesController";
import importCategoriesController from "../useCases/importCategories/ImportCategoriesController";

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRouter.post("/", createCategoryController.handle);

categoriesRouter.get("/", listCategoriesController.handle);

categoriesRouter.post(
  "/import",
  upload.single("uploaded_file"),
  (request, response) => {
    importCategoriesController().handle(request, response);
  }
);

export { categoriesRouter };
