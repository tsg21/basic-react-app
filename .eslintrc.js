module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],

  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 7,
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  rules: {
    semi: 0,
    "no-console": ["error", { allow: ["warn", "log"] }],
    "react/prop-types": ["off"],
    "react/display-name": ["off"],
    "no-undef": ["off"] //chokes on fat arrow funcs. Can't seem to use the babel version.
  }
}
