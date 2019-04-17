const { watch } = require('gulp');
const { browserSync } = require('./browserSync');

function serve() {
  browserSync.init({
    server: {
      baseDir: '_site',
      directory: true,
    }
  });

  watch('../_site/').on('change', browserSync.reload);
}

module.exports = { serve };
