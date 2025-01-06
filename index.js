const express = require("express");
const server = express();
const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");

const PORT = process.env.PORT;

server.use("/", indexRouter);
server.use("/new", newMessageRouter);

server.listen(PORT, () =>
  console.log(`Express Server running at http://localhost:${PORT}...`)
);
