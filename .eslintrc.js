module.exports = {
  root: true,
  env: {
    jest: true,
    es2021: true,
  },
  globals: {
    browser: "readonly",
    $: "readonly",
    $$: "readonly",
  },
  extends: [
    "plugin:vue/vue3-essential",
    "@vue/eslint-config-typescript",
    "@vue/prettier",
    "prettier",
  ],

  parserOptions: {
    ecmaVersion: 2021,
  },
};
