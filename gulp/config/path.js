import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        css: './dist/css/',
        html: './dist/',
        images: './dist/images',
        js: './dist/js/',
    },
    src: {
        scss: './src/scss/*.scss',
        html: './src/html/*.html',
        js: './src/js/*.js',
        images: './images/**/*.{jpg,jpeg,png,gif,webp}',
        svg: './images/**/*.svg',
    },
    watch: {
        scss: './src/scss/**/*.scss',
        html: './src/html/**/*.html',
        js: './src/js/**/*.js',
        images: './images/**/*.{jpg,jpeg,png,svg,gif,webp,ico,webp}'
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}