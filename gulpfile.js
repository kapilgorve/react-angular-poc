var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var babel = require('gulp-babel');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var gzip = require('gulp-gzip');

gulp.task('sass', () => {
  gulp
    .src('public/scss/**/*.scss')

    .pipe(sass())
    //.pipe(concat('css/*.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .on('error', function(err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(gulp.dest('public/css/'));
});

gulp.task('scripts', () => {
  gulp
    .src('public/app/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('bundle.js'))
    .pipe(sourcemaps.write('./maps'))
    .on('error', function(err) {
      gutil.log(gutil.colors.red('[Error]'), err.toString());
    })
    .pipe(gulp.dest('public/js'));
});

gulp.task('vendor-copy', () => {
  var vendors = [
    './node_modules/jquery/jquery.min.js',
    './node_modules/angular/angular.js',
    './node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
    './node_modules/react/umd/react.development.js',
    './node_modules/react-dom/umd/react-dom.development.js',
    './node_modules/ngreact/ngReact.js'
  ];
  return gulp
    .src(vendors)
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('public/vendor'))
    .pipe(gzip())
    .pipe(gulp.dest('public/vendor'));
});
gulp.task('default', ['vendor-copy', 'sass', 'scripts'], function() {
  gulp.watch('public/scss/**/*.scss', ['sass']);
  gulp.watch('public/app/**/*.js', ['scripts']);
});
