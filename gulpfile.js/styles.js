const { src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const { paths } = require('./config');

function styles() {
  return src(paths.src.styles)
    .pipe(postcss())
    .pipe(dest(paths.dest.styles));
}

module.exports = { styles };
