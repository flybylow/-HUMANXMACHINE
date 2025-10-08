import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          navy: '#1e293b',      // slate-800
          blue: '#1e40af',      // blue-800
          purple: '#6b21a8',    // purple-800
          dark: '#0f172a',      // slate-900
        },
        brand: {
          orange: '#f97316',    // orange-500
          pink: '#ec4899',      // pink-500
          red: '#ef4444',       // red-500
        }
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to bottom right, #0f172a, #1e40af, #6b21a8)',
        'brand-gradient': 'linear-gradient(to right, #f97316, #ec4899)',
        'brand-gradient-alt': 'linear-gradient(to right, #f97316, #ef4444)',
      }
    },
  },
  plugins: [],
}
export default config

