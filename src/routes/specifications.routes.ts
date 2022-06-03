import { Router } from "express";
import createSpecificationController from "../useCases/createSpecification/CreateSpecificationController";
import listCategoriesController from "../useCases/listSpecifications/ListSpecificationsController";

const specificationsRouter = Router();

specificationsRouter.post("/", (request, response) => {
  createSpecificationController.handle(request, response);
});

specificationsRouter.get("/", (request, response) => {
  listCategoriesController.handle(request, response);
});

export { specificationsRouter };
