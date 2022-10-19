import gulp from "gulp";
import { path } from "./gulp/config/path.js";

global.app = {
    path: path,
    gulp: gulp,
}

import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { server } from "./gulp/tasks/server.js";
// import { images } from "./gulp/tasks/images.js";
import { js } from "./gulp/tasks/js.js";


function watcher(){
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    // gulp.watch(path.watch.images, images);
    gulp.watch(path.watch.js, js);
}

const mainTasks = gulp.parallel(html, scss, js);
const dev = gulp.series(mainTasks, gulp.parallel(watcher, server));

gulp.task('default', dev);