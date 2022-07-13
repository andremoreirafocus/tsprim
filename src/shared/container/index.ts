import {container} from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import CategoriesRepository from "../../modules/cars/repositories/CategoriesDatabaseRepository"

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository", 
  CategoriesRepository
);

