'use strict';
var
    gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    useref = require('gulp-useref'),
    gulpIf = require('gulp-if'),
    htmlMin = require('gulp-htmlmin'),
    jsUglify = require('gulp-uglify'),
    cssNano = require('gulp-cssnano'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),

    //paths
    devDir = "app",
    distDir = "www",
    sassFiles = 'app/assets/sass/**/*.sass',
    scssFiles = 'app/assets/scss/**/*.scss',
    fontFiles = 'app/assets/fonts/**/*',
    imageFiles = 'app/assets/images/**/*.+(png|jpg|jpeg|gif|svg)',
    jsFiles = 'app/**/*.js',
    jsonFiles = 'app/**/*.json',
    htmlFiles = 'app/**/*.html';

gulp.task('fonts', function () {
    return gulp.src(fontFiles)
        .pipe(gulp.dest(distDir + '/fonts'))
});

gulp.task('images', function () {
    return gulp.src(imageFiles)
        .pipe(cache(imagemin()))
        .pipe(gulp.dest(distDir + '/assets/images'))
});

gulp.task('sassCompiler', function () {
    return gulp.src([scssFiles, sassFiles])
        .pipe(sass())
        .pipe(gulp.dest('app/assets/css'))
});

gulp.task('projectOptimizer', function () {
    return gulp.src(htmlFiles)
        .pipe(useref())
        .pipe(gulpIf('*.js', jsUglify()))
        .pipe(gulpIf('*.css', cssNano()))
        .pipe(gulpIf('*.html', htmlMin({ collapseWhitespace: true })))
        .pipe(gulp.dest(distDir))
});

gulp.task('watch', function () {
    gulp.watch([scssFiles, sassFiles],
        ['sassCompiler', browserSync.reload]
    );
    gulp.watch([jsFiles, jsonFiles, htmlFiles],
        ['projectOptimizer', browserSync.reload]
    );
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: devDir,
            routes: {
                '/bower_components': 'bower_components',
                '/www': distDir
            }
        }
    })
});

gulp.task('build', [
    'fonts',
    'images',
    'sassCompiler',
    'projectOptimizer',
]);

gulp.task('startServer', [
    'build',
    'watch',
    'browserSync'
]);
