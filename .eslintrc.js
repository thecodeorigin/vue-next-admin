module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: ["./tsconfig.json"],
  },
  rules: {
    "no-console": "warn",
    "no-debugger": "warn",
    "quote-props": [2, "consistent-as-needed"],
    "@typescript-eslint/no-explicit-any": "off",
    "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 1 }],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "*", next: "export" },
    ],
    "comma-dangle": "off",
    "comma-spacing": "off",
    "dot-notation": "off",
    "lines-between-class-members": "off",
    "func-call-spacing": "off",
    "indent": "off",
    "no-redeclare": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-return-await": "off",
    "semi": "off",
    "space-before-function-paren": "off",
    "space-infix-ops": "off",
    "quotes": "off",
    "object-curly-spacing": "off",
    "no-shadow": "off",
    "no-throw-literal": "off",
    "@typescript-eslint/no-throw-literal": ["error"],
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    "@typescript-eslint/quotes": ["error", "double"],
    "@typescript-eslint/space-infix-ops": ["error", { int32Hint: false }],
    "@typescript-eslint/space-before-function-paren": [
      "error",
      { anonymous: "always", named: "never", asyncArrow: "always" },
    ],
    "@typescript-eslint/member-delimiter-style": ["error"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/return-await": "error",
    "@typescript-eslint/no-unused-vars": ["error"],
    "@typescript-eslint/no-unused-expressions": ["error"],
    "@typescript-eslint/no-redeclare": ["error"],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/func-call-spacing": ["error"],
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        enums: "always-multiline",
        functions: "never",
      },
    ],
    "@typescript-eslint/comma-spacing": ["error"],
    "@typescript-eslint/dot-notation": ["error"],
    "@typescript-eslint/lines-between-class-members": ["error"],
    "@typescript-eslint/array-type": ["error", { default: "generic" }],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-confusing-non-null-assertion": ["error"],
    "@typescript-eslint/no-parameter-properties": ["error"],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error"],
    "@typescript-eslint/no-unnecessary-condition": ["error"],
    "@typescript-eslint/type-annotation-spacing": ["error"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-var-requires": "off",
    "vue/component-definition-name-casing": "error",
    "vue/array-bracket-spacing": "error",
    "vue/arrow-spacing": "error",
    "vue/block-spacing": "error",
    "vue/brace-style": "error",
    "vue/camelcase": "error",
    "vue/comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never",
      },
    ],
    "vue/eqeqeq": [
      "error",
      "always",
      {
        null: "always",
      },
    ],
    "vue/key-spacing": "error",
    "vue/keyword-spacing": "error",
    "vue/no-boolean-default": ["error", "default-false"],
    "vue/no-deprecated-scope-attribute": "error",
    "vue/no-empty-pattern": "error",
    "vue/object-curly-spacing": ["error", "always"],
    "vue/padding-line-between-blocks": "error",
    "vue/space-infix-ops": "error",
    "vue/space-unary-ops": "error",
    "vue/v-on-function-call": "error",
    "vue/order-in-components": "error",
    "vue/v-slot-style": [
      "error",
      {
        atComponent: "v-slot",
        default: "v-slot",
        named: "longform",
      },
    ],
    "vue/valid-v-slot": [
      "error",
      {
        allowModifiers: true,
      },
    ],
    "vue/require-default-prop": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
    "vue/custom-event-name-casing": ["error", "kebab-case"],
    "vue/v-on-event-hyphenation": ["error", "always"],
    "vue/attribute-hyphenation": ["error", "always"],
    "vue/prop-name-casing": ["error", "camelCase"],
    "vue/no-lone-template": "off",
    "vue/html-indent": "error",
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 3,
          allowFirstLine: true,
        },
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/dot-location": ["error", "property"],
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx", "*.vue"],
      rules: {
        "@typescript-eslint/explicit-member-accessibility": ["error"],
      },
      parserOptions: {
        project: ["./tsconfig.json"], // Specify it only for TypeScript files
      },
    },
  ],
  ignorePatterns: [
    "node_modules/**",
    "generator/*",
    "**/*.config.js",
    "**/*.config.ts",
    "**/*.template.js",
    ".prettierrc.js",
    "plopfile.js",
  ],
};
