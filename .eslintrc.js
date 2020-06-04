module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'airbnb',
		'airbnb/hooks',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	plugins: [
    'react',
    'react-hooks'
	],
	rules: {
    semi: [2, 'never'],
  },
  settings: {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  }
};