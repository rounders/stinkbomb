/* jshint node: true */
'use strict';

module.exports = {
  name: 'stinkbomb',
  included: function(app, parentAddon) {
    var target = (parentAddon || app);

    this._super.included.apply(this, arguments);
    taget.import('vendor/stinkbomb.css');
  }
};
