import {container} from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/entities/ICategoriesRepository";
import CategoriesRepository from "../../modules/cars/infra/repositories/CategoriesRepository"
import {ISpecificationsRepository} from "../../modules/cars/entities/ISpecificationsRepository"
import SpecificationsRepository from "../../modules/cars/infra/repositories/SpecificationsRepository"
import { IUsersRepository } from "../../modules/accounts/entities/IUsersRepository";
import UsersRepository from "../../modules/accounts/infra/repositories/UsersRepository";

container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository", 
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  "SpecificationsRepository", 
  SpecificationsRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
