const pool = require("./pool");

async function getAllMessages() {
  const { rows } = await pool.query(
    "SELECT id, text, user_name AS user, added FROM messages"
  );
  return rows;
}

async function insertMessage(message, username) {
  const result = await pool.query(
    "INSERT INTO messages (text, user_name) VALUES ($1, $2);",
    [message, username]
  );
  return result.rows[0]; // Return the inserted row - debugging purposes
}

module.exports = {
  getAllMessages,
  insertMessage,
};
