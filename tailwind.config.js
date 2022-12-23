/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			screens: {
				'2xl': { max: '1400px' },
				// => @media (max-width: 1400px) { ... }

				xl: { max: '1279px' },
				// => @media (max-width: 1279px) { ... }

				lg: { max: '1023px' },
				// => @media (max-width: 1023px) { ... }

				md: { max: '767px' },
				// => @media (max-width: 767px) { ... }

				sm: { max: '639px' },
				// => @media (max-width: 639px) { ... }
			},
			zIndex: {
				10: '10',
				20: '20',
				30: '30',
				40: '40',
				50: '50',
				60: '60',
				70: '70',
				80: '80',
				90: '90',
				100: '100',
				110: '110',
				120: '120',
				130: '130',
				140: '140',
				150: '150',
				160: '160',
				170: '170',
				180: '180',
				190: '190',
				200: '200',
				1000000: '1000000',
			},
			colors: {
				custom: {
					DEFAULT: '#a5b3b8',
					light: '#a5b3b8',
				},

				primaryText: '#E4E6EB',
				secondaryText: '#B0B3B8',

				// link
				blueLink: '#4599FF',
				accent: '#2e89ff',

				// icon
				primaryIcon: '#E4E6EB',
				secondaryIcon: '#B0B3B8',

				// background
				primaryButtonBackground: '#2374E1',
				messageCardBackground: '#242526',
				commentBackground: '#3A3B3C',
				cardBackground: '#242526',
			},
		},
	},
	plugins: [],
};
