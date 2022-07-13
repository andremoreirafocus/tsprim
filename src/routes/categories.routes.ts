import { Router } from "express";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const categoriesRouter = Router();

import CreateCategoryController from "../useCases/createCategory/CreateCategoryController";
import ListCategoriesController from "../useCases/listCategories/ListCategoriesController";
import ImportCategoriesController from "../useCases/importCategories/ImportCategoriesController";

const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();
const importCategoriesController = new ImportCategoriesController();

categoriesRouter.post("/", createCategoryController.handle);

categoriesRouter.get("/", listCategoriesController.handle);

categoriesRouter.post("/import",
  upload.single("uploaded_file"),
  importCategoriesController.handle);

export { categoriesRouter };
