var gulp = require('gulp');
var parsePath = require('parse-filepath');

var source = '/path/to/git/repo/my-theme/'
var destination = '/Applications/MAMP/htdocs/wordpress/wp-content/themes/my-theme'

console.log("Gulp is watching directory: ", source);

/*
  Version 2.0
*/
return gulp.watch( source + '/**/*', function(obj){
  if( obj.type === 'changed') {
    gulp.src( obj.path, { "base": source }).pipe(gulp.dest( destination ));
    var path = parsePath(obj.path)
    console.log("File Changed:", path.base, new Date().toLocaleString());    
  }
});


/*
  Version 1.0
*/
//var watch = require('gulp-watch');
//gulp.task('watch-folder', function() {  
//  gulp.src(source + '/**/*', {base: source})
//    .pipe(watch(source, {base: source}))
//    .pipe(gulp.dest(destination));
//});