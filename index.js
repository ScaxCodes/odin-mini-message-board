const express = require("express");
const server = express();
const { indexRouter } = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
const path = require("node:path");

const PORT = process.env.PORT;

server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");
server.use(express.urlencoded({ extended: true }));

server.use("/", indexRouter);
server.use("/new", newMessageRouter);

server.listen(PORT, () =>
  console.log(`Express Server running at http://localhost:${PORT}...`)
);
