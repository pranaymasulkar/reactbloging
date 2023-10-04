import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";

dotenv.config();

const app = express();


const PORT =8000;

app.listen(PORT,()=> console.log(`Server Runiing on the port ${PORT}`))

const USERNAME = process.env.DB_User;
const PASSWORD = process.env.DB_Password;

Connection(USERNAME, PASSWORD);