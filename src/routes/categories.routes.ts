import { Router } from "express";

const categoriesRouter = Router();

import createCategoryController from "../useCases/createCategory/CreateCategoryController";
import listCategoriesController from "../useCases/listCategories/ListCategoriesController";

categoriesRouter.post("/", (request, response) => {
  createCategoryController.handle(request, response);
});

categoriesRouter.get("/", (request, response) => {
  listCategoriesController.handle(request, response);
});

export { categoriesRouter };
