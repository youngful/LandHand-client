/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		screens: {
			'xs': '480px',  
      'sm': '670px',  
      'md': '750px',  
      'lg': '900px', 
      'xl': '1050px', 
      '2xl': '1260px',
		}
	},
	plugins: [],
}
