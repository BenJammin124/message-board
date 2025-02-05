const { Router } = require("express");
const indexRouter = Router();
const { getMessageById } = require("../controllers/messageController");
const { messages } = require("../messageDB");

let idNum = 2;

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: ["Mini Message Board", "New Message"],
    messages: messages,
  });
});

indexRouter.get("/new", (req, res) => {
  res.render("newMessage", { title: "New Message" });
});

indexRouter.get("/:messageId", getMessageById);

indexRouter.post("/new", (req, res) => {
  console.log("message posted" + req.body.text);
  idNum++;
  messages.push({
    text: req.body.text,
    user: "@" + req.body.user,
    added: new Date(),
    id: idNum,
    pic: "https://avatar.iran.liara.run/public",
  });
  res.redirect("/");
});

module.exports = { indexRouter };
