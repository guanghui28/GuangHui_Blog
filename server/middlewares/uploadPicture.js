import multer from "multer";
import path from "path";

const __dirname = path.resolve();

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, path.join(__dirname, "upload"));
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
});

export const uploadPicture = multer({
	storage,
	limits: {
		fileSize: 1 * 1024 * 1024,
	},
	fileFilter: (req, file, cb) => {
		const validExtensionImage = [".png", ".jpg", ".jpeg"];
		const ext = path.extname(file.originalname);

		if (!validExtensionImage.includes(ext)) {
			return cb(new Error("Only images are allowed"));
		}

		cb(null, true);
	},
});
