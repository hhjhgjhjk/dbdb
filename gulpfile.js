//1、导入模块
//导入gulp
const {src,dest,watch} = require('gulp');
//压缩css
const cssnano = require('gulp-cssnano');
//压缩html
const htmlmin = require('gulp-htmlmin');
//压缩图片
const imagemin = require('gulp-imagemin');
//重命名
const rename = require('gulp-rename');
//压缩js
const uglify = require('gulp-uglify');
//合并文件
const concat = require('gulp-concat');
//sass
const sass = require('gulp-sass')(require('sass'));
//将ES6转为ES5
const babel = require('gulp-babel');
//2、发布任务
//首页
function fnCopyIndex(){
    return src('./src/index.html')
        .pipe(dest('./dist'));
}
//第三方插件css
function fnCopyLibCss(){
    return src('./src/lib/**/*.css')
        .pipe(dest('./dist/lib/css'));
}
//第三方插件js
function fnCopyLibJs(){
    return src('./src/lib/**/*.js')
        .pipe(dest('./dist/lib/js'));
}
//html
function fnHTML(){
    return src('./src/html/*.html')
        .pipe(htmlmin())
        .pipe(dest('./dist/html'));
}
//css
function fnCss(){
    return src('./src/sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        // .pipe(cssnano())
        .pipe(rename({suffix : '.min'}))
        .pipe(dest('./dist/css'))
}
//js
function fnJs(){
    return src('./src/js/*.js')
        .pipe(babel({
            presets : ['@babel/env']
        }))
        // .pipe(uglify())
        .pipe(rename({suffix : '.min'}))
        .pipe(dest('./dist/js'));
}
function fnImg(){
    return src('./src/img/*')
        .pipe(imagemin())
        .pipe(dest('./dist/img'));
}
//监听
function fnWatch(){
    watch('./src/index.html',fnCopyIndex);
    watch('./src/lib/**/*.css',fnCopyLibCss);
    watch('./src/lib/**/*.js',fnCopyLibJs);
    watch('./src/html/*.html',fnHTML);
    watch('./src/sass/*.scss',fnCss);
    watch('./src/js/*.js',fnJs);
    watch('./src/img/*',fnImg);
}
exports.copyIndex = fnCopyIndex;
exports.copyLibJs = fnCopyLibJs;
exports.copyLibCss = fnCopyLibCss;
exports.html = fnHTML;
exports.css = fnCss;
exports.js = fnJs;
exports.img = fnImg;
exports.default = fnWatch;
