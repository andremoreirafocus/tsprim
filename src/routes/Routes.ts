import Router from "express";
import CategoriesRouter  from "./categories.routes";
import { specificationsRouter } from "./specifications.routes";

export default class Routes  {
  router: any;
  constructor() {
    this.router = Router();
    const categoriesRouter = new CategoriesRouter();
    this.router.use("/categories", categoriesRouter.router);    
    this.router.use("/specifications", specificationsRouter);
  }
}
