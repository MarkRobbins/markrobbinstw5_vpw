//var fs=require('fs'), vm=require('vm');



var gulp = require('gulp');

var  gulprjs= require('gulp-requirejs-bundler');
// https://www.npmjs.com/package/gulp-requirejs-optimize
var  rjsopt= require('gulp-requirejs-optimize');

// https://github.com/floridoo/gulp-sourcemaps/wiki/Plugins-with-gulp-sourcemaps-support
// https://github.com/floridoo/gulp-sourcemaps
var sourcemaps = require('gulp-sourcemaps');

// https://github.com/dlmanning/gulp-sass
// https://github.com/sass/node-sass#options
var sass=require('gulp-sass');
var rsass=require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload=require('gulp-livereload');
var gp_uglify = require('gulp-uglify');

//console.log(sass);
// e C:\!mark\_tool\markrobbinstw5_vpw\ref\example.build.js
var rjso={
  baseUrl: "www/tw5/tw5-app/lib"
  ,xmainConfigFile: 'app.js'
  ,paths: {
    app: '../app'
    ,protos: 'inits/protos'
    ,jquery_plugins:'inits/jquery_plugins'
    ,clipboards: '../app/clipboards'
    ,qtips:'../app/qtips'
    ,qtipitem:'../app/qtipitem'
    ,qtipmaps:'../app/qtipmaps'
    ,qtipspecs:'../app/qtipspecs'
    ,qtipoptions:'../app/qtipoptions'
    ,qtiptiddler:'../app/qtiptiddler'
    ,squishy:'../app/squishy'
    ,factory:'../app/factory'
    ,events:'../app/events'
    ,cleaner:'../app/cleaner'
    ,timebar:'../app/timebar'
    ,doc: '../app/events/doc'
    ,dom: '../app/events/dom'
    ,kbd: '../app/events/kbd'
    ,mouse: '../app/events/mouse'
    ,scroll: '../app/events/scroll'
    ,focus: '../app/events/focus'
    ,textchange: '../app/events/textchange'
    ,typeeventhooker: 'types/typeeventhooker'
    ,jdenticon:'jdenticon-1.1.0'
  }
  ,waitSeconds: 0
  ,name: "../app"
  ,out: "app-dist.js"
  //,optimize: 'none'
  //,optimize: 'uglify'
};
var pfx= {
    browsers: [
        '> 1%',
        'last 2 versions',
        'firefox >= 4',
        'safari 7',
        'safari 8',
        'IE 8',
        'IE 9',
        'IE 10',
        'IE 11'
    ],
    cascade: false
};
// http://stackoverflow.com/questions/24591854/using-gulp-to-concatenate-and-uglify-files
// https://www.npmjs.com/package/gulp-uglify
var ugly={
  mangle:false
  ,outSourceMap:false
};

gulp.task('sass', function () {
    gulp.src(['www/tw5/tw5-app/css/test.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer(pfx))
        //.pipe(concat('application.min.css'))
        //.pipe(sourcemaps.write('./maps'))
        .pipe(sourcemaps.write('../tw5-app-dist'))
        .pipe(gulp.dest('www/tw5/tw5-app-dist'))
        ;
});
gulp.task('sass2', function () {
    gulp.src(['www/tw5/tw5-app/css/test.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        //.pipe(concat('application.min.css'))
        //.pipe(sourcemaps.write('./maps'))
        .pipe(sourcemaps.write('../tw5-app-dist'))
        .pipe(autoprefixer(pfx))
        .pipe(gulp.dest('www/tw5/tw5-app-dist'))
        ;
});

gulp.task('rjs', function() {
  return gulprjs(rjso)
        .pipe(gulp.dest('./www/tw5/tw5-app-dist'))
        ;
});

gulp.task('rjso', function() {
  return gulp.src('./www/tw5/tw5-app/app.js')
        .pipe(sourcemaps.init())
        .pipe(rjsopt(rjso))
        //.pipe(gp_uglify(ugly))
   //source map http://localhost/tw5/tw5/tw5-app-dist/app-dist.js points to the files missing from the workspace: [http://localhost/source/C:/!mark/_tool/markrobbinstw5_vpw/www/tw5/tw5-app/lib/modulebase.js,
        //.pipe(sourcemaps.write('../tw5-app-dist'))
         .pipe(sourcemaps.write({srcRoot:'/tw5/tw5-app'}))
        .pipe(gulp.dest('./www/tw5/tw5-app-dist'))
        .pipe(livereload())
        ;
});

gulp.task('watch', function() {
  livereload.listen();
  //https://scotch.io/tutorials/a-quick-guide-to-using-livereload-with-gulp
  gulp.watch('www/tw5/tw5-app/**/*.js', ['rjso']);
  //gulp.watch('assets/js/*.js', ['build-js']);
  //gulp.watch('assets/less/**/*.less', ['build-css']);
});
gulp.task('default', function() {
  // place code for your default task here
  // gulp.watch('js/**/*.js', function(event) {
  //   console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
  // });
  // http://stackoverflow.com/questions/23978361/using-gulp-to-build-requirejs-project-gulp-requirejs
  // https://www.npmjs.com/package/gulp-requirejs-bundler
  //return gulprjs(rjso).pipe(gulp.dest('./www/tw5/tw5-app-dist'));

});
