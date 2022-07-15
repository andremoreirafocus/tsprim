import { Router } from "express";
import CreateSpecificationController from "../useCases/createSpecification/CreateSpecificationController";
import ListCategoriesController from "../useCases/listSpecifications/ListSpecificationsController";

const specificationsRouter = Router();

const createSpecificationController = new CreateSpecificationController();
const listCategoriesController = new ListCategoriesController();


specificationsRouter.post("/", createSpecificationController.handle);
specificationsRouter.get("/", listCategoriesController.handle);

export { specificationsRouter };
