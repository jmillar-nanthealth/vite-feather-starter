module.exports = {
  root: true,
  env: {
    jest: true,
    es2021: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
      }
    ]
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
