const { dest } = require('gulp');
const browserify = require('browserify');

function scripts() {
  const b = browserify({
    entries: './js/main.js',
    debug: true
  });

  return b.transform('babelify', {
    presets: ['@babel/preset-env'],
    sourceMaps: true,
  })
    .bundle()
    .pipe(dest('./_site/js'));
}

module.exports = { scripts };
