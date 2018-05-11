/** 
 *  @file       Gulp file for generating Penta roadmap microsite and automating its workflow.
 *
 *  @author     Steve Melnikoff
 *
 *  @requires   NPM:{@link https://www.npmjs.com/}   
 *  @requires   GULP:{@link https://gulpjs.com/}
 *  @see        {@link https://css-tricks.com/gulp-for-beginners/} for help on installing gulp and use cases
 *  @example    $ gulp hello
*/

var gulp = require('gulp'); 
var sass = require('gulp-sass');

/** 
 * @function hello 
 * @desc General gulp hello world test to make sure everything is properly installed
*/
gulp.task('hello', function() {
    console.log('Hello World');
});

/** 
 * @function sass 
 * @desc generate css from scss
*/
gulp.task('sass', function(){
    return gulp.src('css/index.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('css/'))
});