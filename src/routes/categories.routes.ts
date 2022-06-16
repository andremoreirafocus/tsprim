import { Router } from "express";
import multer from "multer";

const upload = multer({ dest: "uploads/" });

const categoriesRouter = Router();

import createCategoryController from "../useCases/createCategory/CreateCategoryController";
import listCategoriesController from "../useCases/listCategories/ListCategoriesController";
import importCategoriesController from "../useCases/importCategories/ImportCategoriesController";

categoriesRouter.post("/", (request, response) => {
  createCategoryController().handle(request, response);
});

categoriesRouter.get("/", (request, response) => {
  listCategoriesController().handle(request, response);
});

categoriesRouter.post(
  "/import",
  upload.single("uploaded_file"),
  (request, response) => {
    importCategoriesController().handle(request, response);
  }
);

export { categoriesRouter };
