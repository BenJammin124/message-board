//messageDB.js
const messages = [
  {
    text: "Hi there! ",
    user: "@Amando",
    added: new Date(),
    id: 1,
    pic: "https://avatar.iran.liara.run/public/45",
  },
  {
    text: "Hello World! ",
    user: "@Charles",
    added: new Date(),
    id: 2,
    pic: "https://avatar.iran.liara.run/public/45",
  },
];

// Function to find message by ID
const findMessageId = async (messageId) => {
  return messages.find((message) => message.id === messageId);
};

module.exports = { findMessageId, messages };
