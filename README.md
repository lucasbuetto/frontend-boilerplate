## Front-End Boilerplate v1.0.0

This repository is designed to create a new web project using AngularJS and Bootstrap
with automation of minification processes files, bundle, build SASS and more soon ...

------
Jump to:
  [Prerequisites](#prerequisites) |
  [Dependencies](#dependencies) |
  [Features](#features) |
  [Getting start](#getting-start)
  
------

### Prerequisites
- [NodeJS v4.4.5+](https://nodejs.org/en/download/current/)
- [Git v2.8.1+](https://git-scm.com/download/)

### Dependencies
- [Bower v1.7.9+](https://bower.io/#install-bower)
- [gulp v3.9.1+](http://gulpjs.com/)
- [browser-sync v2.13.0](https://www.browsersync.io/)
- [gulp-cssnano v2.1.2](https://www.npmjs.com/package/gulp-cssnano)
- [gulp-htmlmin v2.0.0](https://www.npmjs.com/package/gulp-htmlmin)
- [gulp-if v2.0.1](https://www.npmjs.com/package/gulp-if)
- [gulp-sass v2.3.2](https://www.npmjs.com/package/gulp-sass)
- [gulp-uglify v1.5.4](https://www.npmjs.com/package/gulp-uglify)
- [gulp-useref v3.1.0](https://www.npmjs.com/package/gulp-useref)
- [Angular v1.5.8](https://angularjs.org/)
- [Bootstrap v3.3.8](http://getbootstrap.com/)

*These dependencies are automatically generated when you run the install bower and npm install*

------

### Features

- SASS compiler for .sass and .scss file extensions.
- Check files creation and update using the .html, .scss, .sass, .js, and .json extensions. 
And updated browser using browser-sync.
- Optimization and design creation to distribution version to amplify site performance.
- File Bundle CSS and JavaScript through simple comments HTML file.
- Minification HTML, CSS and JavaScript to the output directory.
- Node server for execution and local test development environment and optimized distribution environment.

-----

## Getting start

1- Install [NodeJS](https://nodejs.org/en/)

2- Clone this repository.
```shell
git clone https://github.com/lucasbuetto/frontend-boilerplate.git
```

3- Run npm install to install node modules.
```shell
npm install
```

4- Run bower install to install AngularJS and Bootstrap.
```shell
bower install
```

5- Run gulp startServer to start node server in http://localhost:3000
```shell
gulp startServer
```

After starting the server, access the test url optimized version to deploy through this url:

http://localhost:3000/www
