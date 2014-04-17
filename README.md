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
    * The code came initially from ng-boilerplate, no longer maintained: clutter with build.config.js. Can be simplified.
	* Karma tests
	* index.html template - not very nice code in the Gruntfile.js - maybe a plugin exists for this
	* proper archive for the static web site (.zip), to be included in the Maven POM or in Grunt itself (Maven looks easier and there will
	be the benefit of having the ZIP considered as an artefact out of the box for publication)

* Experience on a bigger project:
	* as long as you stick to the directory structure, nothing to change. It works and keep on working.
	* is the build reproducible on the long term? Difficult to say: many layers of dependencies (looks like Maven): node, grunt, bower & all plugins.
