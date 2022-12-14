module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-content-bg': '#404040',
        'sidebar-bg': '#262626',
        'sidebar-activeLink': '#e5e5e5',
        'sidebar-normalLink': '#e5e5e5',
        'navbar-bg': '#525252',
        'half-transparent': 'rgba(0, 0, 0, 0.5)', // Pop-up Transparency
        'neutral-50': '#fafafa', // Neutral White
        'neutral-100': '#f5f5f5', //
        'neutral-200': '#e5e5e5', //
        'neutral-300': '#d4d4d4', //
        'neutral-400': '#a3a3a3', // Neutral Gray
        'neutral-500': '#737373', //
        'neutral-600': '#525252', //
        'neutral-700': '#404040', //
        'neutral-800': '#262626', //
        'neutral-900': '#171717', // Neutral Black
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://i.ibb.co/MkvLDfb/Rectangle-4389.png')",
      },
    },
  },
  plugins: [],
};
