var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var lint = require('gulp-eslint');

var config = {
	paths: {
	   html: './src/*.html',
	   js: './src/**/*.js',
	   images: './src/images/*',
	   css:[
		   'node_modules/bootstrap/dist/css/bootstrap.min.css',
		   'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
		   './src/css/*.css'
	   ],
	   fonts: 'node_modules/bootstrap/fonts/*',
	   dist: './dist',
	   mainJS: "./src/main.js"
   }
}

gulp.task('live-server',function(){
	var server = new LiveServer('server/server.js');
	server.start();

	gulp.watch(config.paths.html, ['html'], server.start.bind(server));
    gulp.watch(config.paths.js, ['js', 'lint'], server.start.bind(server));
    gulp.watch(config.paths.css,['css'], server.start.bind(server));
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist));
        
});


gulp.task('js', function() {
    browserify(config.paths.mainJS)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'));
        
});

gulp.task('css', function(){
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function(){
    gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'));
        

});

gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(lint({ config: 'eslint.config.json' }))
        .pipe(lint.format());
});

gulp.task('fonts',function() {
    gulp.src(config.paths.fonts)
        .pipe(gulp.dest(config.paths.dist + '/fonts'));
        
});
/**
 * Gulp Task which creates a alias of the server to run at specified port
 */
gulp.task('begin', ['html', 'js', 'css','fonts','images', 'lint', 'live-server']);