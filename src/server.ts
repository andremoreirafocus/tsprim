import express from "express";
import { categoriesRouter } from "./routes/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);

app.get("/", (request, response) => {
  response.send("hi TS 6");
});

app.post("/courses", (request, response) => {
  const { name } = request.body;
  console.log(name);
  response.send("Name received!");
});

app.get("/courses", (request, response) => {
  console.log("Cursos");
});

app.listen(3333);
