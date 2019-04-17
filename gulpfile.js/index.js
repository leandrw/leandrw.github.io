const { parallel, series, watch } = require('gulp');

const config = require('./config');

const { clean } = require('./clean');
const { eleventy, eleventyWatch } = require('./eleventy');
const { images } = require('./images');
const { serve } = require('./serve');
const { styles } = require('./styles');

const compile = parallel(images, styles);

const watchFiles = series(clean, compile, parallel(eleventyWatch, serve, function watching() {
  watch(config.paths.src.styles, styles);
  watch(config.paths.src.images, images);
}));

const build = series(clean, compile, eleventy);

module.exports = { build, watch: watchFiles };
