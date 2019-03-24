const { task, src, dest } = require('gulp');
const browserify = require('browserify');

task('scripts', () => {
  const b = browserify({
    entries: './js/main.js',
    debug: true
  });

  return b.transform('babelify', {
    presets: ['@babel/preset-env'],
    sourceMaps: true,
  })
    .bundle()
    .pipe(dest('./_site/js'))
});
