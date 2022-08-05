import { Request, Response, Router } from "express";
import { container } from "tsyringe";
import AuthenticateUserController from "../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import AuthenticateUserUseCase from "../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserUseCase";
import { IAuthenticateUserUseCase } from "../../../../modules/accounts/useCases/authenticateUser/IAuthenticateUserUseCase";

export default class AuthenticationRouter {
  router: Router
  authenticateUserController: AuthenticateUserController
  constructor() {
    this.router = Router();
    this.registerAndResolve();
    this.addRoutes();
  }

  registerAndResolve() {
    container.register<IAuthenticateUserUseCase>("AuthenticateUserUseCase", AuthenticateUserUseCase);
    this.authenticateUserController = container.resolve(AuthenticateUserController);
  }

  addRoutes() {
    this.router.post("/", (request: Request, response: Response) => {
      this.authenticateUserController.handle(request, response)
    });
  }
} 