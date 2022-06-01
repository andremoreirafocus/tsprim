import { Router } from "express";
import Specification from "../modules/cars/models/Specification";
import SpecificationsMemoryRepository from "../modules/cars/repositories/SpecificationsMemoryRepository";
import CreateSpecificationService from "../modules/cars/services/CreateSpecificationService";

const specificationsRouter = Router();
const specificationsRepository = new SpecificationsMemoryRepository();

specificationsRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );
  try {
    createSpecificationService.execute({ name, description });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
  return response.status(201).send();
});

specificationsRouter.get("/", (request, response) => {
  const specifications: Specification[] = specificationsRepository.get();
  return response.json(specifications);
});

export { specificationsRouter };
