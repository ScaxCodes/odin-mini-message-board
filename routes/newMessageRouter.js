const { Router } = require("express");
const { messages } = require("./indexRouter");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => res.render("newMessage"));

newMessageRouter.post("/", (req, res) => {
  const text = req.body.text;
  const user = req.body.user;
  messages.push({ text, user, added: new Date() });
  res.redirect("/");
});

module.exports = newMessageRouter;
