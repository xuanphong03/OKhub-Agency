import type {Config} from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: ['./src/**/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        productsans: ['var(--font-product-sans)'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        deepblue: 'linear-gradient(180deg, #001CB3 0%, #548BEB 88.7%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        valueToCustomerCard: '0px -59.892px 74.865px 0px rgba(3, 33, 7, 0.04)',
      },
    },
    screens: {
      lg: '1025px',
      sm: '640px',
      xlg: {
        max: '1024px',
      },
      xsm: {
        max: '639px',
      },
      tablet: {
        min: '640px',
        max: '1024px',
      },
    },
  },
  plugins: [
    plugin(function ({addUtilities}) {
      addUtilities({
        '.flex-center': {
          '@apply flex items-center justify-center': {},
        },
        '.absolute-center': {
          '@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2':
            {},
        },
        '.pc-body-20': {
          '@apply text-[1.25rem] leading-[1.5] tracking-[0]': {},
        },
        '.pc-body-18': {
          '@apply text-[1.125rem] leading-[1.39] tracking-[0]': {},
        },
        '.pc-body-16': {
          '@apply text-[1rem] leading-[1.39] tracking-[0]': {},
        },
        '.pc-title-h3': {
          '@apply text-[1.75rem] leading-[1.39] tracking-[0]': {},
        },
        '.pc-body-14': {
          '@apply text-[0.875rem] leading-[1.5] tracking-[0]': {},
        },
        '.pc-body-14-b': {
          '@apply text-[0.875rem] leading-[1.7] tracking-[-0.023]': {},
        },
        '.mb-title-h3': {
          '@apply text-[1.625rem] leading-[1.39] tracking-[0]': {},
        },
        '.mb-body-12': {
          '@apply text-[0.75rem] leading-[1.39] tracking-[0]': {},
        },
        '.mb-body-16': {
          '@apply text-[1rem] leading-[1.5] tracking-[0]': {},
        },
        '.mb-body-14': {
          '@apply text-[0.875rem] leading-[1.5] tracking-[0]': {},
        },
        '.mb-title-h5': {
          '@apply text-[1.25rem] leading-[1.39] tracking-[-1%]': {},
        },
        '.body-18': {
          '@apply text-[1.125rem] leading-[1.4] tracking-[0]': {},
        },
        '.body-18-b': {
          '@apply text-[1.125rem] leading-[1.2] tracking-[0]': {},
        },
        '.body-28': {
          '@apply text-[1.75rem] leading-[1.2] tracking-[-1px]': {},
        },
      })
    }),
  ],
}
export default config
