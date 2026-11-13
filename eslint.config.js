import {defineConfig, globalIgnores} from "eslint/config";
import tsParser from "@typescript-eslint/parser";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import js from "@eslint/js";
import {FlatCompat} from "@eslint/eslintrc";

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([
    {
        languageOptions: {
            parser: tsParser,
            sourceType: "module",
            ecmaVersion: 2020,

            parserOptions: {
                tsconfigRootDir: __dirname,

                project: [
                    "./tsconfig.eslint.json",
                    "ui-automation-tests/tsconfig.json",
                    "backend/**/tsconfig.json",
                    "express/tsconfig.json"
                ],

                ecmaFeatures: {
                    impliedStrict: true
                }
            }
        },

        plugins: {
            "@typescript-eslint": typescriptEslint
        },

        extends: compat.extends("plugin:@typescript-eslint/recommended")
    },
    globalIgnores(["**/node_modules", "**/.aws-sam", "**/dist", "**/jest.config.base.js", "**/jest.config.js"])
]);
