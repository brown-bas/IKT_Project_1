/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			mukta: ['Mukta', 'sans-serif']
		},
		backgroundImage: {
			placeholder: "url('./logo.svg')"
		},
		extend: {}
	},
	plugins: []
};