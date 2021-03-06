var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching css/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./**/*.{js,html,css}").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
