const {src, dest} = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel')



function scripts(){
    return src('scripts/main.js')
    .pipe(babel({
        plugins: ['@babel/transform-runtime']
    }))
    .pipe(concat('main.min.js'))
    .pipe(dest('scripts'))
}

function styles(){
    return src('styles/style.css')
    .pipe(concat('style.min.css'))
    .pipe(dest('styles'))
}

exports.scripts = scripts;
exports.styles = styles;