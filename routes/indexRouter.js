const { Router } = require("express");
const db = require("../db/queries");

const indexRouter = Router();

const messages = [
  {
    text: "LOCAL DUMMY Hi there!",
    user: "LOCAL DUMMY Amando",
    added: new Date(),
  },
  {
    text: "LOCAL DUMMY Hello World!",
    user: "LOCAL DUMMY Charles",
    added: new Date(),
  },
];

// indexRouter.get("/", (req, res) =>
//   res.render("index", {
//     title: "ScaxCodes mini message board",
//     messages: messages,
//   })
// );

indexRouter.get("/", async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", {
    title: "ScaxCodes mini message board",
    messages,
  });
});

module.exports = { indexRouter, messages };
