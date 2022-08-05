import { container } from "tsyringe";
import { fileUploader, FileUploader } from "../middleware/fileAPI";
import { Request, Response, Router } from "express";
import CreateUserController from "../modules/accounts/useCases/createUser/CreateUserController";
import CreateUserUseCase from "../modules/accounts/useCases/createUser/CreateUserUseCase";
import {ICreateUserUseCase} from "../modules/accounts/useCases/createUser/ICreateUserUseCase";
import UpdateAvatarController from "../modules/accounts/useCases/updateAvatar/UpdateAvatarController";
import {IUpdateAvatarUseCase} from "../modules/accounts/useCases/updateAvatar/IUpdateAvatarUseCase";
import UpdateAvatarUseCase from "../modules/accounts/useCases/updateAvatar/UpdateAvatarUseCase";
import EnsureAuthentication from "../middleware/EnsureAuthetication/EnsureAuthetication"
import config from "../config";

export default class UsersRouter {
  fileUploader: FileUploader;
  router: Router;
  createUserController: CreateUserController;
  updateAvatarController: UpdateAvatarController;
  ensureAuthentication: EnsureAuthentication;
  constructor() {
    this.fileUploader = fileUploader(config.avatarFolder);
    this.router = Router();
    this.registerAndResolve();
    this.addRoutes();
  }
  
  registerAndResolve(){
    this.ensureAuthentication = container.resolve(EnsureAuthentication);
    container.register<ICreateUserUseCase>("CreateUserUseCase", CreateUserUseCase);
    this.createUserController = container.resolve(CreateUserController);
    container.register<IUpdateAvatarUseCase>("UpdateAvatarUseCase", UpdateAvatarUseCase)
    this.updateAvatarController = container.resolve(UpdateAvatarController);
  }

  addRoutes() {
    this.router.use(this.ensureAuthentication.handle);
    this.router.post("/", (request: Request, response: Response) => {
      this.createUserController.handle(request, response);
    });
    this.router.patch("/avatar", this.fileUploader.single("file"), (request: Request, response: Response)=> {
      this.updateAvatarController.handle(request, response);
    })
  }
}
