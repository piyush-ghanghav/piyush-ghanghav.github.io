/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
		fontFamily: {
			pixel: ['"Press Start 2P"', 'cursive'],
			inter: ['"Inter"', 'sans-serif'],

			space: ['"Space Grotesk"', 'sans-serif'],
		'pressStart': ['PressStart2P', 'cursive'],
        'aldrich': ['Aldrich', 'sans-serif'],
        'rubikDoodle': ['Rubik Doodle Shadow', 'cursive'],
        orbitron: ['Orbitron', 'sans-serif'],
        },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
			 catppuccin: {
				base: '#1E1E2E',
				surface: '#313244',
				text: '#CDD6F4'
			},
        // Catppuccin Base Colors
        base: 'var(--base)',
        crust: 'var(--crust)',
        mantle: 'var(--mantle)',
        surface: {
          0: 'var(--surface0)',
          1: 'var(--surface1)',
          2: 'var(--surface2)',
        },
        subtext: {
          0: 'var(--subtext0)',
          1: 'var(--subtext1)',
        },
        overlay: {
          0: 'var(--overlay0)',
          1: 'var(--overlay1)',
          2: 'var(--overlay2)',
        },
        
        // Catppuccin Accent Colors
        rosewater: 'var(--rosewater)',
        flamingo: 'var(--flamingo)',
        pink: 'var(--pink)',
        mauve: 'var(--mauve)',
        red: 'var(--red)',
        maroon: 'var(--maroon)',
        peach: 'var(--peach)',
        yellow: 'var(--yellow)',
        green: 'var(--green)',
        teal: 'var(--teal)',
        sky: 'var(--sky)',
        sapphire: 'var(--sapphire)',
        blue: 'var(--blue)',
        lavender: 'var(--lavender)',
  		},
  		animation: {
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
			scroll: 'scroll 60s linear infinite',
			'scroll-reverse': 'scroll-reverse 30s linear infinite'
     
  		},
  		keyframes: {
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
			  scroll: {
				'0%': { transform: 'translateX(0)' },
				'100%': { transform: 'translateX(-50%)' }
			  },
			  'scroll-reverse': {
				'0%': { transform: 'translateX(-50%)' },
				'100%': { transform: 'translateX(0)' }
			  }
  		},
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #6366f1 1px, transparent 1px), linear-gradient(to bottom, #6366f1 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid': '24px 24px',
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
