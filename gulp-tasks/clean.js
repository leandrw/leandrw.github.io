const { task } = require('gulp');
const rimraf = require('rimraf');

task('clean', (cb) => {
  rimraf('./_site', cb);
});

task('clean:images', (cb) => {
  rimraf('./_site/css', cb);
});

task('clean:styles', (cb) => {
  rimraf('./_site/css', cb);
});
