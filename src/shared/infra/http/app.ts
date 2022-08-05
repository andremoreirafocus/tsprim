import express, {Express, NextFunction, Request, Response} from "express";
import "express-async-errors";
import Routes from "./routes/Routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../../swagger.json";
import AppError from "../../errors/AppError";

export default class App {
  app: Express;

  start() {
    this.app = express();
    this.app.use(express.json());
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    const routes = new Routes();
    this.app.use(routes.router);
    this.app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
      if (err instanceof AppError)
        return response.status(err.statusCode).send(err.message);
      return response.status(500).send(`Internal server error - ${err.message}`);
    })
    this.app.listen(3333, () => {
      console.log("API started!");  
    });
  }
}