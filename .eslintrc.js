const path = require("path");

module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:sonarjs/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/react",
    ],
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        "project": path.join(__dirname, "./tsconfig.json")
    },
    "settings": {
        "react": {
            "version": "detect"
        },
    },
    "rules": {
        "@typescript-eslint/consistent-type-imports": ["error"],
        "react/display-name": ['off'],
        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/no-empty-interface": ["off"]
    }
};
