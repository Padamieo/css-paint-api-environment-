const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import')({
      path: path.resolve(__dirname, './src/'),
    }),
    require('postcss-preset-env')({
      browsers: [
        'Android >= 5.0',
        'iOS >= 8.0',
      ],
    }),
    require('postcss-reporter')({ clearMessages: true }),
    require('precss')(),
  ],
};
