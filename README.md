Grunt & Bower
=============

* Presentation
	* Bower - dependency mgt
	* Grunt - build tasks, like Ant or Gradle
	* they depend on Npm

* Problems to solve:
	* relative paths
	* we import the files manually
	* no compression for JS & CSS
	* no support for Less
	* ... other?

* Bower
	* Getting the files
	* Configuration with .bowerrc

* Grunt
	* `clean dev` --> look in `target/dev`
	* `clean prod` --> look in `target/prod`
	* `clean connect:dev watch` --> livereload enabled
	* change some Less code

* Adding a dependency: angular-translate-loader-static-files & angular-translate
	* Using `bower install --save angular-translate-loader-static-files angular-translate`
	* Adding them in `build.config.js`
   
		'vendor/angular-translate/angular-translate.js',
		'vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.js'

    * Running `grunt clean dev` and look the page source

* Improvements
    * Came from ng-boilerplate, no longer maintained: clutter with build.config.js
	* Karma tests
