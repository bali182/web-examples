var gulp = require('gulp'),
  jspm = require('gulp-jspm-build'),
  replacer = require('gulp-html-replace'),
  uglify = require('gulp-uglify');

gulp.task('build-js', [], function () {
  return jspm({
    bundleOptions: {
      minify: true,
    },
    bundleSfx: true, 
    bundles: [
      { src: 'src/main.jsx!', dst: 'bundle.min.js' }
    ]
  }).pipe(gulp.dest('dist'));
})

gulp.task('build-html', [], function () {
  gulp.src('index.html')
    .pipe(replacer({
      'js': 'bundle.min.js'
    }))
    .pipe(gulp.dest('dist/'));
})

gulp.task('default', ['build-js', 'build-html'])