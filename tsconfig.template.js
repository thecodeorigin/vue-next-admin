// From vue-enterprise-template
// See repo: https://github.com/chrisvfritz/vue-enterprise-boilerplate
// This is a template for a jsconfig.json file which will be
// generated when starting the dev server or a build.

module.exports = {
  compilerOptions: {
    strict: true,
    baseUrl: "./",
    target: "esnext",
    module: "esnext",
    jsx: "preserve",
    importHelpers: true,
    moduleResolution: "node",
    esModuleInterop: true,
    skipLibCheck: true,
    allowSyntheticDefaultImports: true,
    allowJs: true,
    sourceMap: true,
    types: ["@types/node"],
    paths: {
      "@/*": ["./src/*"],
    },
    lib: ["esnext", "dom", "dom.iterable", "scripthost"],
  },
  files: ["env.d.ts", "global.d.ts", "shims-vue.d.ts"],
  include: ["src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"],
  exclude: ["node_modules", "dist"],
};
