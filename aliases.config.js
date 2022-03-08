// From vue-enterprise-template
// See repo: https://github.com/chrisvfritz/vue-enterprise-boilerplate
const path = require("path");
const fs = require("fs");
const prettier = require("prettier");

const aliases = {
  "@": "./src",
  "@core": "./src/core",
  "@components": "./src/core/components",
  "@constants": "./src/core/constants",
  "@layouts": "./src/core/layouts",
  "@use": "./src/core/use",
  "@utils": "./src/core/utils",
  "@modules": "./src/modules",
  "@types": "./src/types",
};

const prettierConfig = require("./.prettierrc.js");

module.exports = {
  webpack: {},
  tsconfig: {},
};

for (const alias in aliases) {
  const aliasTo = aliases[alias];
  module.exports.webpack[alias] = resolveSrc(aliasTo);
  module.exports.tsconfig[alias + "/*"] = [aliasTo + "/*"];
  module.exports.tsconfig[alias] = aliasTo.includes("/index.")
    ? [aliasTo]
    : [
        aliasTo + "/index.js",
        aliasTo + "/index.ts",
        aliasTo + "/index.json",
        aliasTo + "/index.vue",
        aliasTo + "/index.scss",
        aliasTo + "/index.css",
      ];
}

const tsconfigTemplate = require("./tsconfig.template");
const tsconfigPath = path.resolve(__dirname, "tsconfig.json");

function writeConfigFile(configPath, configTemplate, configFileName) {
  fs.writeFile(
    configPath,
    prettier.format(
      JSON.stringify({
        ...configTemplate,
        compilerOptions: {
          ...(configTemplate.compilerOptions || {}),
          paths: module.exports[configFileName],
        },
      }),
      {
        ...prettierConfig,
        parser: "json",
      }
    ),
    (error) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.error("Error while creating tsconfig.json from aliases.config.js.");
        throw error;
      }
    }
  );
}

writeConfigFile(tsconfigPath, tsconfigTemplate, "tsconfig");

function resolveSrc(_path) {
  return path.resolve(__dirname, _path);
}
