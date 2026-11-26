import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

/**
 * Flat ESLint config.
 *
 * Lint scope is the app source only - build scripts, the one-off asset
 * downloaders and the generated world-map data module are excluded because
 * they are not shipped to the browser and are not hand-maintained.
 */
export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'public/**',
      'src/assets/**',
      'src/fonts/**',
      'scripts/**',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        React: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      // Unused args are prefixed with _ to mark them deliberate.
      'no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      // Prop types are not used; data shapes are documented in src/data.
      'react/prop-types': 'off',
    },
  },
];
