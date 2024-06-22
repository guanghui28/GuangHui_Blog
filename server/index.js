import express from "express";
import { configDotenv } from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";

configDotenv();
connectDB();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use("/api/users", userRoute);

app.listen(PORT, () => {
	console.log("Server is running on port ", PORT);
});
