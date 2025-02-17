//./routes/indexRouters.js
const { Router } = require("express");
const indexRouter = Router();
const queries = require("../db/queries");

const { getMessageById } = require("../controllers/messageController");

indexRouter.get("/", async (req, res) => {
  res.render("index", {
    title: ["Mini Message Board", "New Message"],
    messages: await queries.getAllMessages(),
  });
});

indexRouter.get("/new", (req, res) => {
  res.render("newMessage", { title: "New Message" });
});

indexRouter.get("/:messageId", getMessageById);

indexRouter.post("/new", async (req, res) => {
  const newMessage = req.body;
  await queries.insertMessage({
    user: newMessage.user,
    text: newMessage.text,
  });
  res.redirect("/");
});

module.exports = { indexRouter };
