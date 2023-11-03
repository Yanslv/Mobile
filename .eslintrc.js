module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['unused-imports'],
  rules: {
     'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
     "no-unused-vars": ["error", {
      "varsIgnorePattern": "^_",
      "argsIgnorePattern": "^_"
    }],
     "react-native/no-inline-styles": 0,
     "prettier/prettier": ["error", {
       "no-inline-styles": false
     }],  
     'unused-imports/no-unused-imports': 'error',
     'unused-imports/no-unused-vars': [
        'warn',
        {
           vars: 'all',
           varsIgnorePattern: '^_',
           args: 'after-used',
           argsIgnorePattern: '^_',
        },
     ],
  },
};
