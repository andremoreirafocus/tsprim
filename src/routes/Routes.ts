import {Router} from "express";
import CategoriesRouter  from "./categories.routes";
import SpecificationsRouter  from "./specifications.routes";
import UsersRouter from "./users.routes";

export default class Routes  {
  router: Router;
  categoriesRouter: CategoriesRouter;
  specificationsRouter: SpecificationsRouter;
  usersRouter: UsersRouter;
  constructor() {
    this.router = Router();
    this.categoriesRouter = new CategoriesRouter();
    this.specificationsRouter = new SpecificationsRouter();
    this.usersRouter = new UsersRouter();
    this.addRoutes();
  }
  addRoutes() {
    this.router.use("/categories", this.categoriesRouter.router);    
    this.router.use("/specifications", this.specificationsRouter.router);
    this.router.use("/users", this.usersRouter.router);
  }
}
