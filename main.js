'use strict';

// cljsbuild adds a preamble mentioning goog so hack around it
window.goog = {
  provide() {},
  require() {},
};
require('./target/expo/env/index.js');
