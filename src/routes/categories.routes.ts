import { Router } from "express";
import Category from "../models/Category";
import CategoriesRepository from "../repositories/CategoriesRepository";

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;
  try {
    categoriesRepository.create({ name, description });
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
