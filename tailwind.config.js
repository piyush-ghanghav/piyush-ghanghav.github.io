/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {

      /* --------------------------------------------------------
         FONTS
         3 fonts only. No pixel fonts, no decorative fonts.
         -------------------------------------------------------- */
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },

      /* --------------------------------------------------------
         COLORS
         All reference CSS variables from index.css.
         Use these in components: bg-surface, text-accent, etc.
         -------------------------------------------------------- */
      colors: {
        /* Layout */
        bg:      'var(--color-bg)',
        surface: {
          DEFAULT:  'var(--color-surface)',
          elevated: 'var(--color-surface-elevated)',
          subtle:   'var(--color-surface-subtle)',
        },

        /* Accent */
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover:   'var(--color-accent-hover)',
          muted:   'var(--color-accent-muted)',
          text:    'var(--color-accent-text)',
        },

        /* Text */
        text: {
          primary:   'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          tertiary:  'var(--color-text-tertiary)',
          disabled:  'var(--color-text-disabled)',
        },

        /* Borders */
        border: {
          DEFAULT: 'var(--color-border)',
          hover:   'var(--color-border-hover)',
        },

        /* Semantic */
        error:   'var(--color-error)',
        warning: 'var(--color-warning)',
        info:    'var(--color-info)',

        /* Shadcn/ui compatibility (required by shadcn components) */
        background:  'hsl(var(--background))',
        foreground:  'hsl(var(--foreground))',
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT:    'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        input: 'hsl(var(--input))',
        ring:  'hsl(var(--ring))',
        safelist: ['bg-[#065F46]', 'border-[#065F46]'],
      },

      /* --------------------------------------------------------
         BORDER RADIUS
         Match the radius tokens from the design system.
         -------------------------------------------------------- */
      borderRadius: {
        sm: 'var(--radius-sm)',   /* 6px  — tags, chips */
        md: 'var(--radius-md)',   /* 10px — buttons, inputs */
        lg: 'var(--radius-lg)',   /* 14px — cards */
        xl: 'var(--radius-xl)',   /* 18px — featured cards */
        /* shadcn also uses --radius */
        DEFAULT: 'var(--radius)',
      },

      /* --------------------------------------------------------
         TYPOGRAPHY SCALE
         rem-based. No vw units.
         -------------------------------------------------------- */
      fontSize: {
        'xs':   ['0.75rem',  { lineHeight: '1.4' }],
        'sm':   ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem',     { lineHeight: '1.7' }],
        'lg':   ['1.125rem', { lineHeight: '1.6' }],
        'xl':   ['1.25rem',  { lineHeight: '1.4' }],
        '2xl':  ['1.5rem',   { lineHeight: '1.2' }],
        '3xl':  ['1.875rem', { lineHeight: '1.15' }],
        '4xl':  ['2.25rem',  { lineHeight: '1.1' }],
        '5xl':  ['3rem',     { lineHeight: '1.05' }],
        '6xl':  ['3.75rem',  { lineHeight: '1' }],
        '7xl':  ['4.5rem',   { lineHeight: '1' }],
      },

      /* --------------------------------------------------------
         SPACING
         Standard Tailwind scale is sufficient.
         Key values for reference:
           p-6  = 24px (standard card padding)
           p-8  = 32px (large card padding)
           py-20 = 80px (section vertical padding)
           py-12 = 48px (mobile section padding)
         -------------------------------------------------------- */

      /* --------------------------------------------------------
         ANIMATIONS
         Only what is actually used in the project.
         -------------------------------------------------------- */
      animation: {
        /* Shadcn border-beam component */
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',

        /* Skills marquee rows */
        'scroll':         'scroll 60s linear infinite',
        'scroll-reverse': 'scroll-reverse 50s linear infinite',

        /* Fade up — sections without Framer Motion */
        'fade-in-up': 'fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },

      keyframes: {
        'border-beam': {
          '100%': { 'offset-distance': '100%' },
        },
        scroll: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-reverse': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },

      /* --------------------------------------------------------
         MAX WIDTH
         Single content container width used everywhere.
         -------------------------------------------------------- */
      maxWidth: {
        'content': '1100px',
      },

      /* --------------------------------------------------------
         BOX SHADOW
         Reference the CSS variable shadows.
         -------------------------------------------------------- */
      boxShadow: {
        'surface':  'var(--shadow-surface)',
        'hover':    'var(--shadow-hover)',
        'elevated': 'var(--shadow-elevated)',
        'glow':     'var(--shadow-accent-glow)',
      },
    },
  },

  plugins: [require('tailwindcss-animate')],
};