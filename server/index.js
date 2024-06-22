import express from "express";
import { configDotenv } from "dotenv";
import connectDB from "./config/db.js";
import {
	errorResponseHandler,
	invalidPathHandler,
} from "./middlewares/errorHandler.js";
import userRoute from "./routes/userRoute.js";

configDotenv();
connectDB();
const PORT = process.env.PORT || 3000;

const app = express();

// received request
app.use(express.json());
app.use("/api/users", userRoute);

// handle Error
app.use(invalidPathHandler);
app.use(errorResponseHandler);

app.listen(PORT, () => {
	console.log("Server is running on port ", PORT);
});
