const { Router } = require("express");
const db = require("../db/queries");

const indexRouter = Router();

indexRouter.get("/", async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", {
    title: "ScaxCodes mini message board",
    messages,
  });
});

module.exports = { indexRouter };
