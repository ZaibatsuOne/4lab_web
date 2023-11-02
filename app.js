const express = require("express");
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");

const app = express();

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", __dirname + "/views");
// app.set("partials", __dirname + "/views/partials");
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("main", {});
});

app.get("/second", (req, res) => {
  res.render("main", {});
});

app.get("/third", (req, res) => {
  res.render("third", {});
});

app.get("/four", (req, res) => {
  res.render("four", {});
});

app.get("/five", (req, res) => {
  res.render("five", {});
});
app.post("/tasks", (req, res) => {
  const formData = req.body;

  res.render("result", { formData });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Запустилось ${PORT}`);
});
