module.exports = {
  parser: "babel-eslint",
  extends: "eslint:recommended",
  plugins: ["flowtype", "babel"],
  rules: {
    "flowtype/define-flow-type": "warn",
    "flowtype/use-flow-type": "warn",
    quotes: ["error", "double"],
    "linebreak-style": ["error", "unix"],
    "no-var": "error",
    "keyword-spacing": "error",
    strict: "off",
    "no-underscore-dangle": "off",
    curly: "off",
    "no-multi-spaces": "off",
    "key-spacing": "off",
    "no-return-assign": "off",
    "consistent-return": "off",
    "no-shadow": "off",
    "no-use-before-define": "off",
    "no-empty": "off",
    "new-parens": "off",
    "no-cond-assign": "off",
    "no-fallthrough": "error",
    "new-cap": "off",
    "no-loop-func": "off",
    "no-unreachable": "off",
    "no-labels": "off",
    "no-process-exit": "off",
    "no-trailing-spaces": "error",
    camelcase: "off",
    "no-console": "off",
    "no-constant-condition": "off",
    "no-inner-declarations": "off",
    "no-case-declarations": "off",
    semi: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "prefer-const": ["error", {
      destructuring: "any",
      ignoreReadBeforeAssign: true
    }],
    "spaced-comment": ["error", "always", {
      exceptions: ["-", "+"],
      markers: ["=", "!"]           // space here to support sprockets directives
    }],
    "unicode-bom": ["error", "never"],
    "prefer-template": "error",
    "object-curly-spacing": ["error", "always"],

    // soft indent of 2 characters
    "indent": ["error", 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],

    // maximum length of 110 characters
    "max-len": ["error", 110, 2],

    // Enforce parens around arrow function arguments
    "arrow-parens": ["error", "always"],
    // Require a space on each side of arrow operator
    "arrow-spacing": ["error", { before: true, after: true }],
    // Require a space on each side of all infix operators
    "space-infix-ops": "error",
    // Prevent using => in a condition where <= is intended
    "no-confusing-arrow": "error",
    // prevent no space in `if (){`
    "space-before-blocks": ["error", "always"]
  },

  globals: {
    // Flow
    Iterator: true,
    $Keys: true
  },

  env: {
    node: true,
    es6: true,
    browser: true
  }
};
