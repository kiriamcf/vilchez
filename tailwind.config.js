/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                
            },
            fontFamily: {
				sans: ["Acumin Variable Concept" ,...defaultTheme.fontFamily.sans],
				special: "MADE Canvas Regular"
			}
        },
    },
    plugins: [],
}

