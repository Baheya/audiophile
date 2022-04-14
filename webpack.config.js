const path = require('path');

module.exports = {
  //...
  resolve: {
    resolve: {
      alias: {
        Components: path.resolve(__dirname, 'components/'),
        Public: path.resolve(__dirname, 'public/'),
        // Templates: path.resolve(__dirname, 'templates/'),
      },
    },
  },
};
