import connect from "./database/db";
import "./shared/container";
import App from "./app";

(async () => {
  const app = new App();
  await connect();
  app.start();
})();




