const fooBarRule = require("./enforce-foo-bar");
const fixMe = require("./fix-me");

const plugin = {
  rules: {
    "enforce-foo-bar": fooBarRule,
    "fix-me": fixMe
  }
};
module.exports = plugin;
