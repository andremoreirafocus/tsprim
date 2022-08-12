import {container} from "tsyringe";
import { ICategoriesRepository } from "../../modules/cars/entities/ICategoriesRepository";
import CategoriesRepository from "../../modules/cars/infra/repositories/CategoriesRepository"
import {ISpecificationsRepository} from "../../modules/cars/entities/ISpecificationsRepository"
import SpecificationsRepository from "../../modules/cars/infra/repositories/SpecificationsRepository"
import { IUsersRepository } from "../../modules/accounts/entities/IUsersRepository";
import UsersRepository from "../../modules/accounts/infra/repositories/UsersRepository";
import { ICarsRepository } from "src/modules/cars/entities/ICarsRepository";
import CarsRepository from "src/modules/cars/infra/repositories/CarsRepository";

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

container.registerSingleton<ICarsRepository>(
  "CarsRepository",
  CarsRepository
)
