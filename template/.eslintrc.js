module.exports = {
	settings: {
		react: {
			version: 'detect',
		},
	},
	env: {
		browser: true,
		es2021: true,
		jest: true,
		node: true,
	},
	extends: [
		'standard-with-typescript',
		'eslint-config-prettier'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json'
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		"@typescript-eslint/consistent-type-definitions": ["error", "type"]
	},
};
