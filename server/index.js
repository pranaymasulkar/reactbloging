import express from "express";
import Connection from "./database/db.js";

const app = express();


const PORT =8000;

app.listen(PORT,()=> console.log(`Server Runiing on the port ${PORT}`))
Connection();