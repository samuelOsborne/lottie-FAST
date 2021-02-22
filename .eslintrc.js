module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    plugins: [
        "@typescript-eslint",
        "prettier"
    ],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier"
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  }
};
