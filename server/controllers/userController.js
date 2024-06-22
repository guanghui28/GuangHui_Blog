import { uploadPicture } from "../middlewares/uploadPicture.js";
import User from "../models/User.js";
import { fileRemover } from "../utils/fileRemover.js";
import generateToken from "../utils/generateToken.js";
import { comparePassword, hashPassword } from "../utils/helpers.js";

export const registerUser = async (req, res, next) => {
	try {
		const { name, email, password } = req.body;

		// check whether user existed or not
		let user = await User.findOne({ email });

		if (user) {
			throw new Error("User have already registered!");
		}

		const hashedPassword = hashPassword(password);

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

		// check correct password
		if (!comparePassword(password, user.password)) {
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

export const updateProfile = async (req, res, next) => {
	try {
		let user = await User.findById(req.user._id);
		if (!user) {
			throw new Error("User not found");
		}

		user.name = req.body.name || user.name;
		user.email = req.body.email || user.email;

		if (req.body.password) {
			if (req.body.password.length < 6) {
				throw new Error("Password must be at least 6 characters long.");
			} else {
				user.password = hashPassword(req.body.password);
			}
		}

		const updatedUserProfile = await user.save();

		res.status(200).json({
			_id: updatedUserProfile._id,
			avatar: updatedUserProfile.avatar,
			name: updatedUserProfile.name,
			email: updatedUserProfile.email,
			verified: updatedUserProfile.verified,
			admin: updatedUserProfile.admin,
		});
	} catch (error) {
		next(error);
	}
};

export const updateProfilePicture = async (req, res, next) => {
	try {
		const upload = uploadPicture.single("profilePicture");
		upload(req, res, async (error) => {
			if (error) {
				const err = new Error(
					`An known Error occur when uploading | ${error.message}`
				);
				next(err);
			} else {
				// everything went well
				if (req.file) {
					let filename;
					let updatedUser = await User.findById(req.user._id);
					filename = updatedUser.avatar;
					if (filename) {
						fileRemover(filename);
					}

					updatedUser.avatar = req.file.filename;
					await updatedUser.save();

					res.status(200).json({
						_id: updatedUser._id,
						avatar: updatedUser.avatar,
						name: updatedUser.name,
						email: updatedUser.email,
						verified: updatedUser.verified,
						admin: updatedUser.admin,
					});
				} else {
					let filename;
					let updatedUser = await User.findById(req.user._id);
					filename = updatedUser.avatar;
					updatedUser.avatar = "";
					await updatedUser.save();
					fileRemover(filename);
					res.json({
						_id: updatedUser._id,
						avatar: updatedUser.avatar,
						name: updatedUser.name,
						email: updatedUser.email,
						verified: updatedUser.verified,
						admin: updatedUser.admin,
					});
				}
			}
		});
	} catch (error) {
		next(error);
	}
};
