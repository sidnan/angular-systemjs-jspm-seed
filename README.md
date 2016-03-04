# angular-systemjs-jspm-seed

This is a seed project for Angular ^1.4 (1.x), ES6 modules via SystemJS module loader, with Babel transpiler. This seed does a lazy-load of modules.


### Some points about this project

- Example for for interactive, high performing tabular data using [ui-grid](http://ui-grid.info/)
- Example for graphical representation of data ([stacked bar chart](https://gist.github.com/sidnan/20cf8ccf17f46534b101)) using [d3](https://github.com/mbostock/d3)
- Lazy-loading modules via [ui-router](https://github.com/angular-ui/ui-router) & [ocLazyLoad](https://github.com/ocombe/ocLazyLoad) with AngularJS
- Unit tests are handled using [Karma](http://karma-runner.github.io/0.13/index.html)/[Jasmine](http://jasmine.github.io/)
- Application Package manager is JSPM
- Project package manager is NPM
- Added Bootstrap CSS framework
- Added SCSS CSS Support
- Added support to generate unit test report in HTML format


### This project is tested with the following:

- [node v4.2.3](https://nodejs.org/en/download/)
- [npm v2.14.7](https://docs.npmjs.com/cli/install)
- [jspm v0.16.12](https://github.com/jspm/jspm-cli)
- [gulp v3.9.0](https://github.com/gulpjs/gulp)
- [systemjs v0.19.3](https://github.com/systemjs/systemjs)
- [karma v0.13.14](http://karma-runner.github.io/0.13/index.html)
- [jasmine v2.3.2](http://jasmine.github.io/)
- [bootstrap@3.3.5](http://getbootstrap.com/getting-started/#download-bower)


### Steps to Install & Run

1. npm install
2. gulp
3. Browse to `http://localhost:9000`


### Gulp Tasks

- `gulp test` to run karma tests
- `gulp release` to prepare for production release

### Reference

- Style guide - https://github.com/johnpapa/angularjs-styleguide
- https://github.com/Swimlane/angular-systemjs-seed
- stacked bar chart - https://gist.github.com/sidnan/20cf8ccf17f46534b101
