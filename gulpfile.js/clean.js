const rimraf = require('rimraf');

function clean(cb) {
  rimraf('./_site', cb);
}

function cleanImages(cb) {
  rimraf('./_site/css', cb);
}

function cleanStyles(cb) {
  rimraf('./_site/css', cb);
}

module.exports = { clean, cleanImages, cleanStyles };
