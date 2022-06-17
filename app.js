const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello this is version-1 POC"));

app.get("/health", (req, res) => {
  res.status(200);
  res.send("healthy");
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
