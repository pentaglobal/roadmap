/**
 *  @file       Gulp file for generating Penta roadmap microsite and automating its workflow.
 *
 *  @author     Steve Melnikoff
 *
 *  @requires   NPM:{@link https://www.npmjs.com/}
 *  @requires   GULP:{@link https://gulpjs.com/}
 *  @see        {@link https://css-tricks.com/gulp-for-beginners/} for help on installing gulp and use cases
 */
const argv = require("yargs").argv;
const gulp = require("gulp");
const gulpSequence = require("gulp-sequence");
const del = require("del");
const gulpif = require("gulp-if");
const clean = require("gulp-clean");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const concat = require("gulp-concat");
const svgo = require("gulp-svgo");
const rename = require("gulp-rename");
const rev = require("gulp-rev");
const revCollector = require("gulp-rev-collector");

var bases = {
  in: "./",
  dist: "./dist/"
};

var paths = {
  scripts: [bases.in + "js/*.js"],
  js: bases.dist + "js",
  scss: [bases.in + "css/**/*.scss"],
  css: bases.dist + "css/",
  html: ["index.html", "index_zh.html"],
  images: [bases.in + "img/tinified/*"],
  img: bases.dist + "img/",
  libs: [bases.in + "libs/*"],
  lib: bases.dist + "libs/",
  ico: bases.in + "ico.png"
};

var createErrorHandler = function(name) {
  return function(err) {
    console.error("Error from " + name + " in compress task", err.toString());
  };
};

/**
 * @function build
 * @desc complete build pipeline
 */
gulp.task(
  "build",
  gulpSequence(
    "clean",
    ["ico", "images", "libs", "sass", "html"],
    "compressjs",
    "revJs",
    "revCss",
    "revHtml"
    // "concatjs-en",
    // "concatjs-zh"
  )
); //eo build

/**
 * @function clean
 * @desc clean up by deleting the dist directory
 */
gulp.task("clean", () => {
  return del([bases.dist]).then(paths => {
    console.log("Deleted files and folders:\n", paths.join("\n"));
  });
}); //eo clean

/**
 * @function ico
 * @desc copy favicon into dist/
 */
gulp.task("ico", () => {
  return gulp.src(paths.ico).pipe(gulp.dest(bases.dist));
});

/**
 * @function images
 * @desc copy all the images into dist/
 */
gulp.task("images", () => {
  console.log("... copying images from: ", paths.images, " to: ", paths.img);
  return gulp
    .src(paths.images)
    .pipe(svgo())
    .pipe(gulp.dest(paths.img));
});

/**
 * @function libs
 * @desc copy all the libs into dist/
 */
gulp.task("libs", () => {
  console.log("... copying libs from: ", paths.images, " to: ", paths.img);
  return gulp
    .src(paths.libs)
    .pipe(svgo())
    .pipe(gulp.dest(paths.lib));
});

/**
 * @function sass
 * @desc generate css from scss
 */
gulp.task("sass", () => {
  console.log("... generate css from scss: ", paths.scss, " to: ", paths.css);
  return gulp
    .src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest(paths.css));
});

/**
 * @function html
 * @desc generate minimized html
 */
gulp.task("html", () => {
  console.log(
    "... generating minimized html from: ",
    paths.html,
    " to: ",
    bases.dist
  );
  return gulp
    .src(paths.html)
    .pipe(
      htmlmin({
        collapseWhitespace: true
      })
    )
    .pipe(gulp.dest(bases.dist));
});

/**
 * @function compressjs
 * @desc generate .min.js from .js;
 */
gulp.task("compressjs", () => {
  console.log(
    "... generate minimized js from: ",
    paths.scripts,
    " to: ",
    paths.js
  );
  return gulp
    .src(paths.scripts)
    .pipe(uglify())
    .on("error", createErrorHandler("uglify"))
    .pipe(gulp.dest(paths.js));
});

/**
 * @function concatjs
 * @desc generate all the minified js into a single js file
 * TODO: need add md5 version for clear cache
 */
gulp.task("concatjs-en", () => {
  var src = [
    bases.dist + "js/config-en.js",
    paths.libs + "jquery.min.js",
    bases.dist + "js/index.js"
  ];
  var out = "index-en.min.js";
  console.log("... concatenating js from: ", src.toString(), " to: ", out);
  return gulp
    .src(src)
    .pipe(concat(out))
    .on("error", createErrorHandler("concat"))
    .pipe(gulp.dest(paths.js));
});

gulp.task("concatjs-zh", () => {
  var src = [
    bases.dist + "js/config-zh.js",
    paths.libs + "jquery.min.js",
    bases.dist + "js/index.js"
  ];
  var out = "index-zh.min.js";
  console.log("... concatenating js from: ", src.toString(), " to: ", out);
  return gulp
    .src(src)
    .pipe(concat(out))
    .on("error", createErrorHandler("concat"))
    .pipe(gulp.dest(paths.js));
});

gulp.task("revJs", function() {
  return gulp
    .src([bases.dist + "/js/*.js"])
    .pipe(rev())
    .pipe(gulp.dest(bases.dist + "/js"))
    .pipe(rev.manifest())
    .pipe(gulp.dest(bases.dist + "/rev/js"));
});

gulp.task("revCss", function() {
  return gulp
    .src([bases.dist + "/css/*.css"])
    .pipe(rev())
    .pipe(gulp.dest(bases.dist + "/css"))
    .pipe(rev.manifest())
    .pipe(gulp.dest(bases.dist + "/rev/css"));
});

gulp.task("revHtml", function() {
  return gulp
    .src([bases.dist + "/rev/**/*.json", bases.dist + "/*.html"])
    .pipe(revCollector())
    .pipe(gulp.dest(bases.dist));
});
