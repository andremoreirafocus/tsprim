import express, {Express} from "express";
import Routes from "./routes/Routes";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

export default class App {
  app: Express;

  start() {
    this.app = express();
    this.app.use(express.json());
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    const routes = new Routes();
    this.app.use(routes.router);
    this.app.listen(3333, () => {
      console.log("API started!");  
    });
  }
}