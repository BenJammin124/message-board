//./db/queries.js
const pool = require("./pool");
const formattedDate = require("./currentDate");

async function getMessageById(id) {
  console.log(id);
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");

  return rows;
}

async function insertMessage(message) {
  await pool.query(
    "INSERT INTO messages (name, message, date) VALUES ($1, $2, $3)",
    [message.user, message.text, formattedDate]
  );
}

module.exports = {
  getAllMessages,
  getMessageById,
  insertMessage,
};
