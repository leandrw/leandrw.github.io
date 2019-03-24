const { task, series, parallel, src, dest } = require('gulp');

task('clean');

task('styles');

task('scripts');

task('images');

task('devServer');

task('build', series('clean', series('styles', 'scripts', 'images')));
