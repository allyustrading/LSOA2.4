export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        liuli: {
          ink: '#0f172a',
          cyan: '#0f766e',
          mist: '#ecfeff',
          stone: '#f8fafc',
        },
      },
      boxShadow: {
        soft: '0 16px 50px rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        xl2: '28px',
      },
    },
  },
  plugins: [],
}
