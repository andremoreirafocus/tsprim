import {container} from "tsyringe";
import {Multer}  from "multer";
import {fileUploader} from "../middleware/fileAPI"
import { Request, Response, Router } from "express";
import CreateUserController from "../modules/accounts/useCases/createUser/CreateUserController";
import CreateUserUseCase from "../modules/accounts/useCases/createUser/CreateUserUseCase";
import {ICreateUserUseCase} from "../modules/accounts/useCases/createUser/ICreateUserUseCase";
import UpdateAvatarController from "../modules/accounts/useCases/updateAvatar/UpdateAvatarController";
import {IUpdateAvatarUseCase} from "../modules/accounts/useCases/updateAvatar/IUpdateAvatarUseCase";
import UpdateAvatarUseCase from "../modules/accounts/useCases/updateAvatar/UpdateAvatarUseCase";
import ensureAuthentication from "../middleware/ensureAuthentication";
import config from "../config";

export default class UsersRouter {
  fileUploader: Multer
  router: Router;
  createUserController: CreateUserController;
  updateAvatarController: UpdateAvatarController;
  constructor() {
    // this.upload = multer({ dest: "avatars/"})
    this.fileUploader = fileUploader(config.avatarFolder);
    this.router = Router();
    this.registerAndResolve();
    this.addRoutes();
  }

  registerAndResolve(){
    container.register<ICreateUserUseCase>("CreateUserUseCase", CreateUserUseCase);
    this.createUserController = container.resolve(CreateUserController);
    container.register<IUpdateAvatarUseCase>("UpdateAvatarUseCase", UpdateAvatarUseCase)
    this.updateAvatarController = container.resolve(UpdateAvatarController);
  }

  addRoutes() {
    this.router.use(ensureAuthentication);
    this.router.post("/", (request: Request, response: Response) => {
      this.createUserController.handle(request, response);
    });
    this.router.patch("/avatar", this.fileUploader.single("file"), (request: Request, response: Response)=> {
      this.updateAvatarController.handle(request, response);
    })
  }
}
