const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');

const { browserSync } = require('./browserSync');
const { paths } = require('./config');

function images() {
  return src(paths.src.images)
    .pipe(imagemin())
    .pipe(dest(paths.dest.images))
    .pipe(browserSync.stream());
}

module.exports = { images };
