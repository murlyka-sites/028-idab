var gulp   = require('gulp'),
    imagemin = require('gulp-imagemin');
    
    imagemin.mozjpeg = require('imagemin-mozjpeg');
    imagemin.pngquant = require('imagemin-pngquant');

gulp.task('imagemin', function () {
  gulp.src(['source/images/**/*.jpg', 'source/images/**/*.png', 'source/images/**/*.svg'])
    .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.jpegtran({progressive: true}),
            imagemin.mozjpeg({progressive: true}),
            imagemin.optipng({optimizationLevel: 7}),
            imagemin.pngquant({quality: '85-100'})
        ]))
    .pipe(gulp.dest('images/'));
});