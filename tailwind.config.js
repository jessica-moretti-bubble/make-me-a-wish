export default {
    darkMode: 'class',
    content: [
      './components/**/*.{vue,js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './app.vue',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Nunito', 'Inter', 'sans-serif'],
        },

        colors: {
          // Colore principale (lavanda)
          primary: {
            DEFAULT: '#8a75ff',

            50:  '#f5f3ff',
            100: '#ebe8ff',
            200: '#dcd5ff',
            300: '#c2b6ff',
            400: '#a390ff',
            500: '#8a75ff',   //  colore principale 
            600: '#6753d9',
            700: '#4f3eb2',
            800: '#3b2e8c',
            900: '#2e2570',
          },
  
          // Grigi neutri per testi e sfondi
          neutral: {
            50:  '#fafafa',
            100: '#f4f4f5',
            200: '#e4e4e7',
            300: '#d4d4d8',
            400: '#a1a1aa',
            500: '#71717a',
            600: '#52525b',
            700: '#3f3f46',
            800: '#27272a',
            900: '#18181b',
          },
  
          // Colori di stato
          success: {
            100: '#dcfce7',
            500: '#22c55e',
            700: '#15803d',
          },
          warning: {
            100: '#fef9c3',
            500: '#eab308',
            700: '#a16207',
          },
          error: {
            100: '#fee2e2',
            500: '#ef4444',
            700: '#b91c1c',
          },
  
          background: {
            light: '#ffffff',
            dark: '#1a1a1a',
            subtle: '#f9f9fb',
          },
          
        },
      },
    },
    plugins: [],
  }

  // https://icones.js.org/collection/streamline-flex-color
  // https://icones.js.org/collection/bxs