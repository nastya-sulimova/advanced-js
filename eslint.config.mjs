import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint'
import prettierConfig from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      'no-unused-vars': 'warn'
    },
    languageOptions: {
      globals: globals.browser
    },
    extends: [
      js.configs.recommended,  // или '@eslint/js/recommended'
      // другие расширения
    ]
  },
  prettierPlugin,
  prettierConfig
])

// import globals from 'globals'
// import pluginJs from '@eslint/js'
// import config from 'eslint-config-prettier'
// import plugin from 'eslint-plugin-prettier/recommended'

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//     { languageOptions: { globals: globals.browser } },
//     pluginJs.configs.recommended,
//     config,
//     plugin,
// ]
