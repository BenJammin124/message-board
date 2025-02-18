//./db/pool.js
const { Pool } = require("pg");
require("dotenv").config();

const databaseUrl = env.process.DATABASE_IURL;

module.exports = new Pool({
  connectionString: databaseUrl,
});
