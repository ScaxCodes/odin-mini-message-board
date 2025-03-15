const { Router } = require("express");
const messageController = require("../controllers/messageController");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => res.render("newMessage"));

newMessageRouter.post("/", messageController.postMessage);

module.exports = newMessageRouter;
