const express = require("express");
const app = express(); // create express app

app.use(express.static("build"));

const port = process.env.PORT || 8080

// start express server on port 8080
app.listen(port, () => {
  console.log("server started on port 8080");
});