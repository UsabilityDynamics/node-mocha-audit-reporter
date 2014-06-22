/**
 * Node.js Module Build
 *
 * @author potanin@UD
 * @version 0.0.2
 * @param grunt
 */
module.exports = function( grunt ) {

  grunt.initConfig( {

    pkg: grunt.file.readJSON( 'package.json' ),

    mochacli: {
      options: {
        require: [ 'should' ],
        reporter: 'list',
        ui: 'exports'
      },
      all: [ 'test/*.js' ]
    },

    yuidoc: {
      compile: {
        name: '<%= pkg.name %>',
        description: '<%= pkg.description %>',
        version: '<%= pkg.version %>',
        url: '<%= pkg.homepage %>',
        logo: 'http://media.usabilitydynamics.com/logo.png',
        options: {
          paths: [ "./bin", "./lib" ],
          outdir: './static/codex'
        }
      }
    },

    jscoverage: {
      options: {
        inputDirectory: 'lib',
        outputDirectory: './static/lib-cov',
        highlight: true
      }
    },

    watch: {
      options: {
        interval: 1000,
        debounceDelay: 500
      },
      docs: {
        files: [ 'readme.md' ],
        tasks: [ 'markdown' ]
      }
    },

    markdown: {
      all: {
        files: [ {
          expand: true,
          src: 'readme.md',
          dest: 'static/',
          ext: '.html'
        }
        ],
        options: {
          // preCompile: function preCompile( src, context ) {},
          // postCompile: function postCompile( src, context ) {},
          templateContext: {},
          markdownOptions: {
            gfm: true,
            codeLines: {
              before: '<span>',
              after: '</span>'
            }
          }
        }
      }
    },

    clean: [],

    shell: {
      install: {},
      update: {}
    }

  });

  // Build Assets
  grunt.registerTask( 'default', [  ] );

};