import fs from "fs";
import path from "path";

const __dirname = path.resolve();

export const fileRemover = (filename) => {
	fs.unlink(path.join(__dirname, "upload", filename), (err) => {
		if (err && err.code === "ENOENT") {
			// file doesn't exist
			console.log(`File ${filename} doesn't exist, won't remove it.`);
		} else if (err) {
			console.log(`Error occurs while trying to remove file ${filename}`);
		} else {
			console.log(`removed ${filename}`);
		}
	});
};
