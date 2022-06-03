import { Router } from "express";
import createSpecificationController from "../useCases/createSpecification/CreateSpecificationController";

const specificationsRouter = Router();

specificationsRouter.post("/", (request, response) => {
  createSpecificationController.handle(request, response);
});

// specificationsRouter.get("/", (request, response) => {
//   const specifications: Specification[] = specificationsRepository.get();
//   return response.json(specifications);
// });

export { specificationsRouter };
