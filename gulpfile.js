'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    runSequence = require("run-sequence");

gulp.task('webserver', function() {
    connect.server({
        port: 8081,
        livereload: true
    });
});

gulp.task("default", function (callback) {
    return runSequence(
        "webserver",
        callback
    );
});

gulp.task("build", function (callback) {
    return runSequence(
        "default",
        callback
    );
});