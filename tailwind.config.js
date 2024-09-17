module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1aad19',
        secondary: '#91ed61',
        grayPrimary: '#4d4d4d',
        danger: '#e3342f',
      },
      height: {
        screen: ['100vh', 'calc(var(--vh, 1vh) * 100)'],
      },
    },
  },
  plugins: [],
};
