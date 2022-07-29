const express = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const app = express();

app.use("/", express.static("."));

app.post("/doupload", upload.single("uploaded_file"), function (
  req,
  res
) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  const { file } = req;
  console.log(file);
  return res.json(file);
});

app.listen(3333);
