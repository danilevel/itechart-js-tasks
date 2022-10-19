import browserSync from "browser-sync";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import babel from "gulp-babel";

export const js = () => {
    return app.gulp.src(app.path.src.js, { sourcemaps: true })
        .pipe(plumber(notify.onError({
            title: "JS",
            message: "Error: <%= error.message %>"
        })))
        .pipe(babel({ presets: ["@babel/env"] }))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(browserSync.stream());
}