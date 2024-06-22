import User from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res, next) => {
	try {
		const { name, email, password } = req.body;

		// check whether user existed or not
		let user = await User.findOne({ email });

		if (user) {
			throw new Error("User have already registered!");
		}

		const salt = bcrypt.genSaltSync(10);
		const hashedPassword = bcrypt.hashSync(password, salt);

		// creating a new user
		user = await User.create({
			name,
			email,
			password: hashedPassword,
		});

		// generate token -> authenticate || authorization
		const token = await generateToken({ id: user._id });

		return res.status(201).json({
			_id: user._id,
			avatar: user.avatar,
			name: user.name,
			email: user.email,
			verified: user.verified,
			admin: user.admin,
			token,
		});
	} catch (error) {
		next(error);
	}
};
