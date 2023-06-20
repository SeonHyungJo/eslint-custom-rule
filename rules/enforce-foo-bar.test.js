const {RuleTester} = require("eslint");
const fooBarRule = require("./enforce-foo-bar");

const code = `
import sample from '@/doamin/getUser'

function correctFooBar() {
  const foo = "bar";
}

function incorrectFoo(){
  const foo = "baz"; // Problem!
}
`

const ruleTester = new RuleTester({
  // Must use at least ecmaVersion 2015 because
  // that's when `const` variables were introduced.
  parserOptions: { ecmaVersion: 2015 }
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
  "enforce-foo-bar", // rule name
  fooBarRule, // rule code
  { // checks
    // 'valid' checks cases that should pass
    valid: [{
      code: code,
    }],
    // 'invalid' checks cases that should not pass
    invalid: [{
      code: "const foo = 'baz';",
      output: 'const foo = "bar";',
      errors: 1,
    }],
  }
);

console.log("All tests passed!");