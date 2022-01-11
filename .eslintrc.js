module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['metarhia', 'plugin:sonarjs/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
  plugins: ['sonarjs'],
};
