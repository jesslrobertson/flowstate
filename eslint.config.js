// https://docs.expo.dev/guides/using-eslint/

const { defineConfig } = require('eslint/config')
const expoConfig = require('eslint-config-expo/flat')
const prettierPlugin = require('eslint-plugin-prettier')

module.exports = defineConfig([
  ...expoConfig,

  {
    plugins: {
      prettier: prettierPlugin,
    },

    rules: {
      'prettier/prettier': 'warn',
      'react-native/no-inline-styles': 'warn',
      'react/jsx-boolean-value': ['warn', 'always'],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      'react-hooks/exhaustive-deps': 'warn',
    },

    ignores: ['dist/*'],
  },
])
