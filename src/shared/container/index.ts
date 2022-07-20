import {container} from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import CategoriesRepository from "../../modules/cars/repositories/CategoriesDatabaseRepository"
import {ISpecificationsRepository} from "../../modules/cars/repositories/ISpecificationsRepository"
import SpecificationsRepository from "../../modules/cars/repositories/SpecificationsDatabaseRepository"

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository", 
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository", 
  SpecificationsRepository
);
