/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		container: {
			center: true,
			padding: {
				DEFAULT: '0',
				lg: '2.5rem'
			},
			screens: {
				sm: '100%',
				md: '768px',
				lg: '1024px'
			}
		}
	},
	plugins: []
};
