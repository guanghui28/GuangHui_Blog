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

export const loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body;

		let user = await User.findOne({ email });

		if (!user) {
			throw new Error("Email not found");
		}

		const isCorrectPassword = bcrypt.compareSync(password, user.password);

		if (!isCorrectPassword) {
			throw new Error("Invalid email or password");
		}

		// generate token -> authenticate || authorization
		const token = await generateToken({ id: user._id });

		return res.status(200).json({
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

export const userProfile = async (req, res, next) => {
	try {
		let user = await User.findById(req.user._id);

		if (user) {
			return res.status(200).json({
				_id: user._id,
				avatar: user.avatar,
				name: user.name,
				email: user.email,
				verified: user.verified,
				admin: user.admin,
			});
		} else {
			let error = new Error("User not found");
			error.statusCode = 404;
			next(error);
		}
	} catch (error) {
		next(error);
	}
};
