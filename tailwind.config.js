/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#1565D8",
				dark: {
					light: "#5a7184",
					hard: "#0d2436",
					soft: "#183b56",
				},
			},
			fontFamily: {
				opensans: ["'Open Sans'", "sans-serif"],
				roboto: ["'Roboto'", "sans-serif"],
			},
		},
		plugins: [],
	},
};
