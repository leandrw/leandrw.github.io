const { task, watch, parallel, series } = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp-tasks');

task('compile', parallel('images', 'styles'));

task('watch', series('clean', 'compile', parallel('eleventy:watch', () => {
  watch('./css/**/*.css', series('clean:styles', 'styles'));
  watch('./img/*', series('clean:images', 'images'));
})));

task('build', series('clean', 'compile', 'eleventy'));
