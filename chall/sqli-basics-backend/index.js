import express from 'express';
import bodyParser from 'body-parser';
import * as crypto from 'crypto';
import cors from 'cors';
import cookieParser from "cookie-parser";
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import { readFile } from 'fs/promises';

// Set up database connection
const db = await open({
  filename: ':memory:',
  driver: sqlite3.Database
});

// Create the database tables to store data in
await db.run("CREATE TABLE users (id INT, username TEXT, password TEXT);");

// Load the database with data
await db.run(`INSERT INTO users (id, username, password) VALUES (1, 'admin', '${crypto.randomUUID()}')`);

// Load flag from filesystem
const flag = await readFile('./flag.txt');

// Set up API server
const app = express();
const port = 8443;

app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:80', 'http://localhost', 'https://*.cyber-jr.at'],
  credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Server application code

const sessions = [];

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`;
  let user = null;

  try {
    user = await db.get(query);
  } catch (e) {
    res.send({ message: `Database query failed for: ${query}` });
    return;
  }

  if (user == null) {
    res.send({ message: "Invalid credentials" });
    return;
  }

  const sessionKey = crypto.randomUUID();
  sessions.push(sessionKey);

  res.cookie("session-key", sessionKey);
  res.send({ sessionKey: sessionKey });
});

app.get('/flag', async (req, res) => {
  const sessionKey = req.cookies["session-key"];

  if (!sessions.includes(sessionKey) || sessionKey == null) {
    res.send({ message: "Invalid session" });
    return;
  }

  res.send({ flag: flag.toString() });
});

// Don't crash when an exception occurs
process.on('uncaughtException', err => console.log(err));

// Start server
app.listen(port, () => console.log(`Projects server listening on port ${port}`));
