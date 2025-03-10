#! /usr/bin/env node
require("dotenv").config();

const { Client } = require("pg");

const SQL = /* sql */ `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text TEXT NOT NULL,
  user_name VARCHAR(255) NOT NULL,
  added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, user_name) 
VALUES 
  ('Hi there!', 'Amando'),
  ('Hello World!', 'Charles');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
