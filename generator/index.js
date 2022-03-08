export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setHelper("upperCase", (txt) => txt.toUpperCase());
  plop.setHelper("lowerCase", (txt) => txt.toLowerCase());

  // controller generator
  plop.setGenerator("module", {
    description: "Create a new module in your application",
    prompts: [
      {
        type: "input",
        name: "moduleName",
        message: "module's name:",
      },
    ],
    actions: [
      ...["constants/index.ts", "store/index.ts", "api.ts", "router.ts", "page.vue"].map(
        (path) => ({
          type: "add",
          path: "src/modules/{{kebabCase moduleName}}/" + path,
          templateFile: "generator/template/" + path + ".hbs",
          data: {},
        })
      ),
    ],
  });
}
