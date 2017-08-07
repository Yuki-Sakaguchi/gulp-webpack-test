var
gulp          = require('gulp'),
plumber       = require('gulp-plumber'),
webpack       = require('gulp-webpack'),
webpackConfig = require('./webpack.config.js');

/**
 * webpack
 */
gulp.task('webpack', function() {
    // コンパイル元
    gulp.src('./src/js/**/*.js')

    // エラーでwatchを止めない
    .pipe(plumber({
        errorHandler: function(err) {
            console.log(err.messageFormatted);
            return this.emit('end');
        }
    }))

    // webpack
    .pipe(webpack(webpackConfig))

    // コンパイル先
    .pipe(gulp.dest('./public/js/'));
});

/**
 * watch
 */
gulp.task('watch', function() {
    gulp.watch('./src/js/**/*.js', ['webpack']);
});