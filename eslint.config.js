"use strict";

const fixMe = require("./rules/fix-me");
const toDo = require("./rules/to-do");
const checkConsoleLog = require("./rules/check-console-log");
const deprecatedImport = require("./rules/deprecated-import");


module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
    },
    plugins: {
      "@snyung": {
        rules: {
          "fix-me": fixMe,
          "to-do": toDo,
          "checkot-console-log": checkConsoleLog,
          "deprecated-import": deprecatedImport,
        }
      },
    },
    rules: {
      "quotes": ["error", "double"],
      "@snyung/fix-me": "error",
      "@snyung/to-do": "warn",
      "@snyung/checkot-console-log": "warn",
      "@snyung/deprecated-import": ["error", ["@/utils", "./module/utils"]]
    },
  }
]