const { task, src, dest } = require('gulp');
const { exec } = require('child_process');

task('eleventy', (cb) => {
  exec('npx eleventy', (err, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
});

task('eleventy:watch', (cb) => {
  exec('npx eleventy --serve', (err, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
});
