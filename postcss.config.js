const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // ✅ correct usage as a plugin key
    autoprefixer: {},
  },
};
