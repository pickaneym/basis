var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

module.exports = function () {
    return gulp.src(['./app/**/*.css', './assets/css/*.css'])
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(concat('concat.css'))
        .pipe(rename('kemsys.min.css'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./assets/dist/css'));
};