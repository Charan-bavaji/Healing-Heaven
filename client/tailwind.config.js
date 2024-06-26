/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      flexCenter: {
        'flex-center': {
          display: 'flex',
          'justify-content': 'center',
          'align-items': 'center',
        },
      },
      // bg: {
      //   color: "red"
      // },
    },
  },
  plugins: [],
}

