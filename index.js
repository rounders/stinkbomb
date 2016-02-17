/* jshint node: true */
'use strict';

module.exports = {
  name: 'stinkbomb',
  included: function(app) {
    app.import('vendor/stinkbomb.css');
  }
};
