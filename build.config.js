/**
 * This file/module contains all configuration for the build process.
 */
module.exports = {

    /**
     * Root for the SRC files
     */
    src_dir: 'src',

    /**
     * The `dev_dir` folder is where our projects are compiled during
     * development and the `prod_dir` folder is where our app resides once it's
     * completely built. The `temp_dir` is used for intermediary targets during the
	 * build process.
     */
    dev_dir: 'target/dev',
    prod_dir: 'target/prod',
    temp_dir: 'target/tmp',

    /**
     * This is a collection of file patterns that refer to our app code (the
     * stuff in `src/`). These file paths are used in the configuration of
     * build tasks. `js` is all project javascript, less tests. `tpl` contains
     * our template HTML files. `html` is just our
     * main HTML file, `less` is our main stylesheet.
     */
    app_files: {
        js: [ '**/*.js', '!**/*.spec.js', '!assets/**/*.js' ],
        tpl: [ '**/*.tpl.html' ],
        html: [ 'index.html' ],
        less: 'less/main.less'
    },

    /**
     * This is the same as `app_files`, except it contains patterns that
     * reference vendor code (`vendor/`) that we need to place into the build
     * process somewhere. While the `app_files` property ensures all
     * standardized files are collected for compilation, it is the user's job
     * to ensure non-standardized (i.e. vendor-related) files are handled
     * appropriately in `vendor_files.js`.
     *
     * The `vendor_files.js` property holds files to be automatically
     * concatenated and minified with our project source files.
     *
     * The `vendor_files.css` property holds any CSS files to be automatically
     * included in our app.
     *
     * The `vendor_files.assets` property holds any assets to be copied along
     * with our app's assets. This structure is flattened, so it is not
     * recommended that you use wildcards.
     */
    vendor_files: {
        js: [
            'vendor/jquery/jquery.js',
            'vendor/angular/angular.js',
            'vendor/angular-route/angular-route.js',
            'vendor/angular-sanitize/angular-sanitize.js',
            'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'vendor/angular-translate/angular-translate.js',
            'vendor/angular-translate-loader-static-files/angular-translate-loader-static-files.js'
        ],
        css: [
        ],
        assets: [
        ],
        fonts: [
            'vendor/bootstrap/fonts/glyphicons-halflings-regular.*'
        ]
    }

}