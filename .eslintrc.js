module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'eslint-config-prettier',
  ],
  parser: 'babel-eslint',
  rules: {
    'space-in-brackets': [
      'error',
      'always',
      {
        singleValue: false,
        objectsInArrays: false,
        arraysInArrays: false,
        arraysInObjects: false,
        objectsInObjects: false,
        propertyName: false,
      },
    ],
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
      },
    ],
  },
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    },
  },
}
