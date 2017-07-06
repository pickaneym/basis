var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps');

module.exports = function () {
    return gulp.src(['./app/bootstrap.js', './app/**/*.js', './config/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('concat.js'))
        .pipe(rename('kemsys.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('assets/dist/js'));
};