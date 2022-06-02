import { Router } from "express";

const categoriesRouter = Router();

import createCategoryController from "../useCases/createCategory/CreateCategoryController";

categoriesRouter.post("/", (request, response) => {
  createCategoryController.handle(request, response);
});
// categoriesRouter.get("/", (request, response) => {
//   const categories: Category[] = categoriesRepository.get();
//   return response.json(categories);
// });

export { categoriesRouter };
