const db = require("../db/queries");

async function getAllMessages(req, res) {
  const messages = await db.getAllMessages();
  console.log(messages);
  res.render("index", {
    title: "ScaxCodes mini message board",
    messages,
  });
}

async function postMessage(req, res) {
  const text = req.body.text;
  const user = req.body.user;
  await db.insertMessage(text, user);
  res.redirect("/");
}

module.exports = {
  getAllMessages,
  postMessage,
};
