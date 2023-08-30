/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '.app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cyberpunk': 'linear-gradient(to top,#000000,#3840A2,#9800B9,#FFFAFF,#9800B9,#3840A2,#00000000)',
        'gradient-button': 'linear-gradient(to bottom,  #EC49F7, #9800B9,#3840A2,#2B1543)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "bladerunner": "url(/bladerunnerBg.png)",
        "bladerunnerMobile": "url(/mobileBg.png)",
        "bestLines": "url(/best_photos/bg.png)"
      },
      colors: {
        defaulPurple: "#1a0d28"
      },
      fontFamily: {
        bladeRunner: "BladeRunner, cursive"
      },
      backgroundColor: {

      }
    },
  },
  plugins: [],
}
