import browserSync from "browser-sync";
import fileInclude from "gulp-file-include";
import htmlmin from "gulp-htmlmin";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(fileInclude())
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(browserSync.stream());
}