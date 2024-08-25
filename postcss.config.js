module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('@csstools/postcss-sass'),
    require('postcss-mixins'),
    require('autoprefixer'),
    require('postcss-simple-vars'),
    require('postcss-import'),
    require('postcss-extend')
  ]
};

