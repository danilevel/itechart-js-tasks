import browsersync from "browser-sync";

export const server = () => {
    browsersync.create().init({
        server: {
            baseDir: './dist'
        },
        notify: false,
        port: 3000
    });
}