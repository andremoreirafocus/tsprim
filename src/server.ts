import connect from "./shared/infra/database/db";
import "./shared/container";
import App from "./shared/infra/http/app";

(async () => {
  const app = new App();
  await connect();
  app.start();
})();




