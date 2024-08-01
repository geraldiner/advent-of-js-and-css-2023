import pluginJs from '@eslint/js';
import pluginPrettierConfig from 'eslint-config-prettier';
import pluginImportConfig from 'eslint-plugin-import/config/recommended.js';
import pluginJest from 'eslint-plugin-jest';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import globals from 'globals';

export default [
	{
		ignores: ['dist', 'node_modules', 'package.json', 'package-lock.json', 'webpack.config.js'],
	},
	{
		files: ['**/*.{js,mjs,cjs,jsx}'],
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}},
	},
	{
		languageOptions: {globals: {...globals.browser, ...globals.node}},
	},
	{
		plugins: {
			import: pluginImportConfig,
			jest: pluginJest,
		},
	},
	pluginJs.configs.recommended,
	pluginReactConfig,
	pluginPrettierConfig,
	{
		rules: {
			'dot-notation': ['error'],
			'eqeqeq': ['error', 'always'],
			'linebreak-style': 0,
			'no-var': 1,
			'no-unused-vars': ['warn'],
			'no-useless-concat': 1,
			'no-useless-constructor': 1,
			'no-multi-spaces': ['error'],
			'prefer-const': 1,
			'sort-imports': [
				'error',
				{
					ignoreDeclarationSort: true,
				},
			],
		},
	},
];
