# Copy over changed files

## Scenario

I was asked to help work on a Wordpress Theme project with a dev environment I'm not very comfortable with. Instead of spending time installing Virtual Box, Vagrant, learning Bitbucket, etc. I simply want to install [Mamp](https://www.mamp.info/en/), clone the necessary Wordpress content to my local machine (using [UpdraftPlus](https://updraftplus.com/) and clone the theme using Git.  The only problem is tha the Git Repo has a bunch of other stuff that won't allow me to easily drop it into ```htdocs```.  Therefore, here was my solution. 


---


# Gulp to the Rescue!


All I had to do was create a node app, install Gulp and paste this code: 

**Step 1**

Install [NodeJS](http://nodejs.org)


**Step 2**


Change directory into this app
```
cd /location/of/this/app
```

Install the packages into this app
```
npm install
```


**Step 3**

```language-javascript
var gulp = require('gulp');
var parsePath = require('parse-filepath');


var source = '/path/to/git/repo/my-theme/'
var destination = '/Applications/MAMP/htdocs/wordpress/wp-content/themes/my-theme'

console.log("Gulp is watching directory: ", source);

return gulp.watch( source + '/**/*', function(obj){
  if( obj.type === 'changed') {
    gulp.src( obj.path, { "base": source }).pipe(gulp.dest( destination ));
    var path = parsePath(obj.path)
    console.log("File Changed:", path.base, new Date().toLocaleString());    
  }
});

```


**Step 4**

I use nodemon to watch my app. You don't have to use it but it's easy.
```
nodemon app.js
```


---


# Resources


- [Resource](http://blog.andrewray.me/how-to-copy-only-changed-files-with-gulp/)