import { NextFunction, Request, Response } from "express";
import AppError from "../../errors/AppError"
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { validateAuthToken } from "../validateAuthToken";
import { inject, injectable } from "tsyringe";

// the handler is injected in a express router, so this will be lost
let self: any;
@injectable()
export default class EnsureAuthentication {
  constructor(@inject("UsersRepository") private usersRepository: IUsersRepository){
    self = this;
  }

  async handle (request: Request, response: Response, next: NextFunction)  {
    if (!request.headers.authorization)
      throw new AppError("Authorization is required!", 401)
    console.log(request.headers.authorization)
    const [,token] = request.headers.authorization.split(" ");
    console.log("tokens", token);
    try {
      console.log("verify");
      const id = validateAuthToken(token);
      console.log("verified");
      console.log(id);
      const user = await self.usersRepository.findById(id.toString());
      if (!user) {
        console.log("user not found");
        throw new AppError("Authorization is required!", 401);
      }
      request.user = {
        id: user.id
      }
      next();
    } catch (err) {
      throw new AppError("Authorization is required!", 401);
    }
  }
}