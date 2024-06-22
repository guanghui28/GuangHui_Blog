import express from "express";
import { configDotenv } from "dotenv";

configDotenv();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.listen(PORT, () => {
	console.log("Server is running on port ", PORT);
});
