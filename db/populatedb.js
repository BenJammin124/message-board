#! /usr/bin/env node
//./db/populatedb.js
require("dotenv").config();
const formattedDate = require("./currentDate");
const { Client } = require("pg");

const ROLE_NAME = process.env.ROLE_NAME;
const HOST = process.env.HOST;
const DB = process.env.DB;
const ROLE_PASSWORD = process.env.ROLE_PASSWORD;

console.log("Connection string:", process.env.CONNECTION_STRING);

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user VARCHAR ( 30 ),
  text VARCHAR ( 500 ),
  added VARCHAR ( 30 )

);

INSERT INTO messages (user, text, added) 
VALUES
  ('Bryan', 'Hi there!', '${formattedDate}'),
  ('Odin', 'HELLO WORLD!', '${formattedDate}'),
  ('Damon', 'Hey everyone!', '${formattedDate}');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString:
      "postgresql://db_k7r0_user:mc1BiOM9HuBmrblWsbxnq3I6enV9VyK8@dpg-cupqna5svqrc73f4vf9g-a.ohio-postgres.render.com/db_k7r0",
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
