import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const authGuard = async (req, res, next) => {
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			const token = req.headers.authorization.split(" ")[1];

			const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
			const user = await User.findById(id).select("-password");
			req.user = user;
			next();
		} catch (error) {
			let err = new Error("Not authorized, Token failed");
			err.statusCode = 401;
			next(err);
		}
	} else {
		let error = new Error("Not authorized, No Token");
		error.statusCode = 401;
		next(error);
	}
};
