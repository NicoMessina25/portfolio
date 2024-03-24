/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'exo': ['"Exo 2 Variable"', 'sans-serif'],
			'code': ['"Source Code Pro Variable"', 'monospace']
		},
		colors: {
			'primary': {
				'50': '#eff8ff',
				'100': '#ddf1ff',
				'200': '#b4e4ff',
				'300': '#71d0ff',
				'400': '#26b9ff',
				'500': '#00a0fe',
				'600': '#007fda',
				'700': '#0064b0',
				'800': '#005591',
				'900': '#034677',
				'950': '#01182b',
			},
			'white': {
				'50': '#ffffff',
				'100': '#efefef',
				'200': '#dcdcdc',
				'300': '#bdbdbd',
				'400': '#989898',
				'500': '#7c7c7c',
				'600': '#656565',
				'700': '#525252',
				'800': '#464646',
				'900': '#3d3d3d',
				'950': '#292929',
			},
			'accent': {
				'50': '#effeef',
				'100': '#d9ffdb',
				'200': '#b5fdba',
				'300': '#76fa81',
				'400': '#3aee4a',
				'500': '#11d622',
				'600': '#07b216',
				'700': '#0a8b16',
				'800': '#0e6d18',
				'900': '#0d5a17',
				'950': '#013207',
			},
			
		  },
	},
	plugins: [],
}
