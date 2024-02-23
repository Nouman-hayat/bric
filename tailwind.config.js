/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*"],
	theme: {
		extend: {
			colors: {
				greentale: "#4BACA5",
				greentalealpha: "rgba(75, 172, 165, 0.9)",
				lightale1: "#EFFDFC",
				orangetheme: "#E94E33",
				darkblack: "#283E3C",
				lightblack: "#607371",
				lightpurple: "#8046F2",
				darkgrey: "#40424D",
				darkleave: "#092C29",
				lightgreysmalltext: "#9EAEAC",
				blackbg: "#1D1D1B",
			},
			fontFamily: {
				karla: ["Karla", "sans-serif"],
			},
			fontSize: {
				smalltext: "1rem", // Extra small size
			},
		},
		 container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px', // Set max-width to 1200px for xl screens
      },
    },
	},
	plugins: [],
};
