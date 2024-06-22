import express from "express";
import { configDotenv } from "dotenv";
import connectDB from "./config/db.js";

configDotenv();
connectDB();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.listen(PORT, () => {
	console.log("Server is running on port ", PORT);
});
