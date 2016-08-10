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
    zip = require('gulp-zip'),
    gulpSequence = require('gulp-sequence'),
    clean = require('gulp-clean'),

    //paths
    devDir = "app",
    distDir = "dist",
    sassFiles = 'app/assets/sass/**/*.sass',
    scssFiles = 'app/assets/scss/**/*.scss',
    imageFiles = 'app/assets/images/**/*.+(png|jpg|jpeg|gif|svg)',
    jsFiles = 'app/**/*.js',
    jsonFiles = 'app/**/*.json',
    htmlFiles = 'app/**/*.html';

gulp.task('sassCompiler', function () {
    return gulp.src([scssFiles, sassFiles])
        .pipe(sass())
        .pipe(gulp.dest('app/assets/css'))
});

gulp.task('imageOptimazer', function () {
    return gulp.src(imageFiles)
        .pipe(cache(imagemin({
            optimizationLevel: 8,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(distDir + '/assets/images'))
});

gulp.task('projectOptimazer', function () {
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
        ['projectOptimazer', browserSync.reload]
    );
    gulp.watch(imageFiles,
        ['imageOptimazer', browserSync.reload]
    );
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: devDir,
            routes: {
                '/bower_components': 'bower_components',
                '/dist': distDir
            }
        }
    })
});

gulp.task('startServer', [
    'browserSync',
    'watch',
    'sassCompiler',
    'imageOptimazer',
    'projectOptimazer'
]);

gulp.task('clearDist', function () {
    return gulp.src(distDir + '/buildProject.zip', {read: false})
        .pipe(clean());
});

gulp.task('zipDist', function () {
    return gulp.src(distDir + '/**/*')
        .pipe(zip('buildProject.zip'))
        .pipe(gulp.dest(distDir))
});

gulp.task('build', gulpSequence(
    ['sassCompiler', 'imageOptimazer', 'projectOptimazer'],
    ['clearDist'],
    ['zipDist']
));