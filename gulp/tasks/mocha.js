import mocha from 'gulp-mocha';
import babel from 'babel-register';

export const mocha_test = () => {
    return app.gulp.src(app.path.src.mocha)
        .pipe(mocha({
            compilers: babel
        }))
        .pipe(app.gulp.dest(app.path.build.mocha));
}