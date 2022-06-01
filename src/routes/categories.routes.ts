import { Router } from "express";
import Category from "../models/Category";
import CategoriesRepository from "../repositories/CategoriesRepository";
import CreateCategoryService from "../services/CreateCategoryService";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  try {
    createCategoryService.execute({ name, description });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
  return response.status(201).send();
});

categoriesRouter.get("/", (request, response) => {
  const categories: Category[] = categoriesRepository.get();
  return response.json(categories);
});

export { categoriesRouter };
