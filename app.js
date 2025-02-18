//app.js
const express = require("express");
const app = express();
const path = require("node:path");
const { indexRouter } = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.get("/favicon.ico", (req, res) => {
  res.status(204); // No Content
});

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`This is an Express app listening on ${PORT}`);
});
