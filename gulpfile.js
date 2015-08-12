var gulp = require('gulp');

// CSS Packages
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require ('gulp-cssmin');

// JS Packages
var uglify = require('gulp-uglify');

// General Packages
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var copyFiles = [
        './index.html',
        './fonts/**/*',
        './img/**/*'
    ]


// CSS Tasks
gulp.task('css', function() {
    return gulp.src("stylesheets/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe (cssmin())
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
});


// JS Tasks
gulp.task('js', function() {
    return gulp.src('scripts/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'))
});


// Watch files for changes
gulp.task('watch', ['serve'], function() {
    gulp.watch('*.html', ['copy']).on('change', reload);
    gulp.watch('stylesheets/**/*.scss', ['css']);
    gulp.watch('scripts/**/*.js'), ['js'];
});


// Start server on port 8080
gulp.task('serve', ['css'], function() {
    browserSync.init({
        port: 8080,
        server: 'dist'
    });
});


// Copy assets to dist
gulp.task('copy', function() {
    gulp.src(copyFiles, { base: './' })
    .pipe(gulp.dest('dist'));
})

// Default task
gulp.task('default', ['copy', 'css', 'js', 'serve']);