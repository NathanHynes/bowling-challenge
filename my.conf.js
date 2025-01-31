// Karma configuration
// Generated on Sat Oct 19 2019 20:03:26 GMT+0100 (British Summer Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'jquery-1.8.3'],


    // list of files / patterns to load in the browser
    files: [
      'src/*.js',
      'spec/*.specs.js'
    ],

    // list of files / patterns to exclude
    exclude: [
      'src/interface.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/*.js': ['coverage']
    },

    plugins: [
        require('karma-jasmine'),
        require('karma-phantomjs-launcher'),
        require("karma-chrome-launcher"),
        require('karma-spec-reporter'),
        require('karma-jasmine-html-reporter'),
        require('karma-coverage'),
        require('karma-jquery')
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage', 'spec', 'kjhtml'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    customLaunchers: {
      // tell TravisCI to use chromium when testing
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: [
          '--disable-web-security',
          '--disable-gpu',
          '--no-sandbox'
        ]
      }
    },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    coverageReporter: {
      includeAllSources: true,
      dir: 'coverage/',
      reporters: [
        { type:'lcovonly', subdir: 'lcov'},
        { type:'json', subdir: 'json'},
        { type: "html", subdir: "html" },
        { type: 'cobertura', subdir: 'cobertura' },
        { type: 'text-summary' }
      ]
    }
  });

  // Detect if this is TravisCI running the tests and tell it to use chromium
  if (process.env.TRAVIS) {
    config.browsers = ['Chrome_travis_ci'];
  }
};
