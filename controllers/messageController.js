const { findMessageId } = require("../messageDB");
const asyncHandler = require("express-async-handler");

const getMessageById = asyncHandler(async (req, res) => {
  const { messageId } = req.params;
  console.log(messageId);
  const message = await findMessageId(Number(messageId));

  if (!message) {
    throw new Error("nopes");
  }

  // res.send(`Author Name: ${message.id}`);
  res.render("../views/messageDetails", {
    title: `${message.user} + ${message.text}`,
    message: message,
  });
});

module.exports = { getMessageById };
