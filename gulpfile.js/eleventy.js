const { exec } = require('child_process');

function eleventy(cb) {
  exec('npx eleventy --pathprefix="/"', (err, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
}

function eleventyWatch(cb) {
  exec('npx eleventy --watch', (err, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
}

module.exports = { eleventy, eleventyWatch };
