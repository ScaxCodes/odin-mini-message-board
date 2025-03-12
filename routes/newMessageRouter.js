const { Router } = require("express");
const db = require("../db/queries");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => res.render("newMessage"));

newMessageRouter.post("/", async function postMessage(req, res) {
  const text = req.body.text;
  const user = req.body.user;
  await db.insertMessage(text, user);
  res.redirect("/");
});

module.exports = newMessageRouter;
