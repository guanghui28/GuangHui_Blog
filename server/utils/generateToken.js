import jwt from "jsonwebtoken";

const generateToken = async (payload) => {
	return await await jwt.sign(payload, process.env.JWT_SECRET_KEY, {
		expiresIn: "30d",
	});
};
export default generateToken;
