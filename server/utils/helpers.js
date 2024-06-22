import bcrypt from "bcryptjs";

export const comparePassword = (password, hashedPassword) => {
	const isCorrect = bcrypt.compareSync(password, hashedPassword);
	return isCorrect;
};

export const hashPassword = (password) => {
	const salt = bcrypt.genSaltSync(10);
	const hashedPassword = bcrypt.hashSync(password, salt);
	return hashedPassword;
};
