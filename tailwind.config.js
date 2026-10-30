/** Konfigurasi sama persis dengan blok tailwind.config di index.html (versi CDN). */
module.exports = {
  content: ['./index.html'],
  darkMode: 'class',
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
      colors: {
        surface: {
          0: '#000000',
          100: '#181818',
          200: '#1F1F1F',
          300: '#272727',
          400: '#313131',
          warm: '#131209',
        },
      },
      transitionTimingFunction: {
        weighted: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
};
