/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			quick: "Quicksand, Helvetica, sans-serif",
		},
		extend: {
			boxShadow: {
				btnShadow: "8px 10px 25px -5px",
				btnHoverShadow: "8px 10px 25px -5px #c5ced1",
			},
		},
	},

	plugins: [],
};
