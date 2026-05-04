import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'

export default [
  { files: ['**/*.{js,mjs,cjs,jsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'arrow-parens': ['error', 'as-needed'],
      'comma-dangle': ['error', 'never'],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn'
    }
  }
]
