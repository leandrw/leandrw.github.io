const { task, src, dest } = require('gulp');
const postcss = require('gulp-postcss');

task('styles', () =>
  src('./css/**/*.css')
    .pipe(postcss())
    .pipe(dest('./_site/css'))
);
