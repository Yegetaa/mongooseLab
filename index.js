import express from "express";


import "./loadEnv.js";
import grades from "./routes/grades.js";



// import { conn, db } from "./db/conn.js";import mongoose from "mongoose";
// conn();

const app = express();
const PORT = process.env.PORT || 5050;


app.use(express.json());
// app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

app.use("/grades", grades);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
