const { task, src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');

task('images', () =>
  src('./img/**/*')
    .pipe(imagemin())
    .pipe(dest('./_site/img'))
);
