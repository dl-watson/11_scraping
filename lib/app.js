const express = require("express");
const app = express();

app.use(express.json());

app.use("/books", require("./controllers/book"));

module.exports = app;
