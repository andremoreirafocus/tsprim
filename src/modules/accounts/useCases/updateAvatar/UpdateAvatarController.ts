import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppError";
import updateAvatarUseCase from "./UpdateAvatarUseCase";

@injectable()
export default class UpdateAvatarController {
  constructor(@inject("UpdateAvatarUseCase") private updateAvatarUseCase: updateAvatarUseCase) {}

  async handle(request: Request, response: Response){
    console.log(request.params);
    const { id: user_id } = request.user;
    const avatarFileMetadata = request.file;
    const avatar_file_name = avatarFileMetadata.filename;
    console.log(avatarFileMetadata);
    try {
      await this.updateAvatarUseCase.execute({user_id, avatar_file_name});
      response.status(200).send("avatar uploaded");
    } catch (err) {
      // next(err);
      response.status(400).send(err.message);
    }
  }
}