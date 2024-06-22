import express from "express";
import {
	registerUser,
	loginUser,
	userProfile,
	updateProfile,
	updateProfilePicture,
} from "../controllers/userController.js";
import { authGuard } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
router.put("/update-profile", authGuard, updateProfile);
router.put("/upload-profile-picture", authGuard, updateProfilePicture);

export default router;
