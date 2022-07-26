import {container} from "tsyringe";
import { Request, Response, Router } from "express";
import CreateUserController from "../modules/accounts/useCases/createUser/CreateUserController";
import CreateUserUseCase from "../modules/accounts/useCases/createUser/CreateUserUseCase";
import {ICreateUserUseCase} from "../modules/accounts/useCases/createUser/ICreateUserUseCase";

export default class UsersRouter {
  router: Router;
  createUserController: CreateUserController;
  constructor() {
    this.router = Router();
    this.registerAndResolve();
    this.addRoutes();
  }

  registerAndResolve(){
    container.register<CreateUserUseCase>("CreateUserUseCase", CreateUserUseCase);
    this.createUserController = container.resolve(CreateUserController);
  }

  addRoutes() {
    this.router.post("/", (request: Request, response: Response) => {
      this.createUserController.handle(request, response)
    });
  }
}
