/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./public/**/*.{html,js}"],
	theme: {
		colors: {
			transparent: "transparent",
			white: "white",
			"v-desatured-blue": "hsl(238, 29%, 16%)",
			"soft-red": "hsl(14, 88%, 65%)",
			"bg-violet": "hsl(273, 75%, 66%)",
			"bg-blue": "hsl(240, 73%, 65%)",
			"light-grayish-blue": "hsl(240, 5%, 91%)",
			"v-dark-grayish-blue": "hsl(237, 12%, 33%)",
			"dark-grayish-blue": "hsl(240, 6%, 50%)",
		},
		screens: {
			sm: "375px",
			md: "768px",
			lg: "968px",
		},
		extend: {
			fontFamily: {
				kumbh: ["Kumbh Sans", ...defaultTheme.fontFamily.sans],
			},
			keyframes: {
				arrow: {
					from: { transform: "rotate(0deg)" },
					to: { transform: "rotate(180deg)" },
				},
				"arrow-reverse": {
					from: { transform: "rotate(180deg)" },
					to: { transform: "rotate(0deg)" },
				},
				text: {
					from: {
						height: "0px",
						"font-size": "0px",
					},
					to: {
						height: "fit-content",
						"font-size": "12px",
					},
				},
				"text-reverse": {
					to: {
						height: "0px",
						"font-size": "0px",
					},
					from: {
						height: "fit-content",
						"font-size": "12px",
					},
				},
			},
			animation: {
				"arrow-rotation": "0.3s ease-in-out forwards arrow",
				"arrow-reverse": "0.3s ease-in-out forwards arrow-reverse",
				"text-expand": "0.3 ease-in-out forwards text",
				"text-shrink": "0.3 ease-in-out forwards text-reverse",
			},
		},
	},
	plugins: [],
};
