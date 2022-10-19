// import webp from "gulp-webp";
// import imagemin from "gulp-imagemin";
// import newer from "gulp-newer";
// import browsersync from "browser-sync";

// export const images = () => {
//     return app.gulp.src(app.path.src.images)
//         .pipe(newer(app.path.build.images))
//         .pipe(webp())
//         .pipe(app.gulp.dest(app.path.build.images)) 
//         .pipe(app.gulp.src(app.path.src.images))
//         .pipe(newer(app.path.build.images))
//         .pipe(app.gulp.dest(app.path.build.images))
//         .pipe(app.gulp.src(app.path.src.svg))
//         .pipe(app.gulp.dest(app.path.build.images))
//         .pipe(browsersync.stream());
// }