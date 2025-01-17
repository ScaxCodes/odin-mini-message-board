const { Router } = require("express");

const indexRouter = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) =>
  res.render("index", {
    title: "ScaxCodes mini message board",
    messages: messages,
  })
);
indexRouter.post("/new", (req, res) => {
  const text = req.body.text;
  const user = req.body.user;
  messages.push({ text, user, added: new Date() });
  res.redirect("/");
});

module.exports = indexRouter;
