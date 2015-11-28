const gulp = require('gulp'),
  jspm = require('gulp-jspm'),
  replace = require('gulp-html-replace'),
  rename = require('gulp-rename'),
  minifyHtml = require('gulp-minify-html'),
  sourcemaps = require('gulp-sourcemaps');

const JSPM_CONFIG = {
  selfExecutingBundle: true,
  plugin: true,
  format: 'global',
  minify: true,
  sourceMap: true
};

gulp.task('build-js', [], () => gulp.src('src/main.jsx')
  .pipe(sourcemaps.init())
    .pipe(jspm(JSPM_CONFIG))
  .pipe(sourcemaps.write('.'))
  .pipe(rename('bundle.min.js'))
  .pipe(gulp.dest('dist'))
);

gulp.task('build-html', [], () => gulp.src('index.html')
  .pipe(replace({ 'js': 'bundle.min.js' }))
  .pipe(minifyHtml())
  .pipe(gulp.dest('dist/'))
);

gulp.task('default', ['build-js', 'build-html'])
