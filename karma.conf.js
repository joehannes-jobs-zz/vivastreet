// Karma configuration
// Generated on Mon Feb 29 2016 13:10:59 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'jasmine'],

    jspm: {
        config: './public/system.config.js',
        loadFiles: [
            './test/unit/*.spec.js',
            './public/src/controllers/*.js',
        ],
        serveFiles: [
            './public/src/controllers/*.js',
            './test/unit/!(*.spec).js'
        ]
    },

    files: [
        './node_modules/babel-polyfill/dist/polyfill.js'
    ],

    proxies: {
        '/public/': '/base/public/',
        '/jspm_packages/': '/base/jspm_packages/',
        '/test/': '/base/test/'
    },

    // list of files to exclude
    exclude: [
    ],


    reporters: ['progress', 'coverage'],

    preprocessors: {
        'unit/!(*spec).js': ['babel', 'sourcemap', 'coverage']
    },

    babelPreprocessor: {
        options: {
            sourceMap: 'inline',
            blacklist: []
        },
        sourceFileName: function(file) {
            return file.originalPath;
        }
    },

    coverageReporter: {
        instrumenters: {isparta: require('isparta')},
        instrumenter: {
            'unit/*.js': 'isparta'
        },
        reporters: [
            {
                type: 'text-summary'
            },
            {
                type: 'html',
                dir: 'coverage/'
            }
        ]
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
