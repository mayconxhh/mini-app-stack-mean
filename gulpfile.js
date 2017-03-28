var gulp = require('gulp')
var stylus = require('gulp-stylus')
var nib = require('nib')
var watch = require('gulp-watch')
var rename = require('gulp-rename')
var babel = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var watchify = require('watchify')
var uglify = require('gulp-uglify')
var pump = require('pump')

gulp.task('stylus', ()=>{
	return gulp.src('./lib/styles/*.styl')
		.pipe(stylus({
			use: nib(),
			compress: true,
			'include css': true,
		}))
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public/style/'))
})

function compile(watch){
	var bundle = browserify('./lib/js/index.js', {debug: true})

	if(watch){
		bundle = watchify(bundle)
		bundle.on('update', function(){
			// console.log(new Date() + ' Bundling...')
			rebundle()
			compress()
		})
	}

	function rebundle(){
		bundle
			.transform(babel, {presets: ['es2015'], plugins: ['syntax-async-functions', 'transform-regenerator']})
			.bundle()
			.on('error', function(error){ 
				console.log(error)
				this.emit('end')
			})
			.pipe(source('index.js'))
			.pipe(rename('app.js'))
			.pipe(gulp.dest('src/js/'))
	}

	function compress() {
		console.log('compilando...')
		pump([
				gulp.src('src/js/*.js'),
				uglify(),
				gulp.dest('public/js/')
			]
		)
	}

	rebundle()
	compress()
}

gulp.task('build', function(){
	return compile()
})

gulp.task('js', function(){
	return compile(true)
})

gulp.task('watch', ()=> {
	gulp.watch('./lib/styles/*.styl', ['stylus'])
	gulp.watch('./lib/js/*.js', ['js'])
})

gulp.task('default', ['watch'])