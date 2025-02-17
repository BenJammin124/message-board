#! /usr/bin/env node
//./db/populatedb.js
require("dotenv").config();
const formattedDate = require("./currentDate");
const { Client } = require("pg");

const ROLE_NAME = process.env.ROLE_NAME;
const HOST = process.env.HOST;
const DB = process.env.DB;
const ROLE_PASSWORD = process.env.ROLE_PASSWORD;

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  user VARCHAR ( 30 ),
  text VARCHAR ( 500 ),
  added VARCHAR ( 30 ),

);

INSERT INTO messages (username) 
VALUES
  ('Bryan', 'Hi there!', '${formattedDate}'),
  ('Odin', 'HELLO WORLD!', '${formattedDate}'),
  ('Damon', 'Hey everyone!', '${formattedDate}');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.CONNECTING_STRING,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
