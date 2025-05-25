
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors for Vishnu Organic Oils
				natural: {
					50: '#F5E8C1',
					100: '#EFE2B1',
					200: '#E9D89A',
					300: '#D9C87A',
					400: '#C4B25C',
					500: '#A89A45',
					600: '#8A7E37',
					700: '#6C6229',
					800: '#4E461C',
					900: '#302A10',
				},
				forest: {
					50: '#E8F0E6',
					100: '#D1E1CD',
					200: '#B9D1B4',
					300: '#A2C29B',
					400: '#8BA888',
					500: '#739D74',
					600: '#5C8160',
					700: '#45654C',
					800: '#314939',
					900: '#1E2C22',
				},
				earth: {
					50: '#F1EBE5',
					100: '#E3D7CB',
					200: '#D4C3B1',
					300: '#C6AF97',
					400: '#B79B7D',
					500: '#A67F5D',
					600: '#8B6A4D',
					700: '#6F553E',
					800: '#54402E',
					900: '#382B1F',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out forwards',
				'slide-up': 'slide-up 0.5s ease-out forwards',
			},
			fontFamily: {
				'playfair': ['"Playfair Display"', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			backgroundImage: {
				'oil-texture': "url('/src/assets/oil-texture.jpg')",
				'leaf-pattern': "url('/src/assets/leaf-pattern.svg')",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
