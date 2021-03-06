'use strict';

module.exports = function (grunt) {
  require('time-grunt')(grunt); // Show elapsed time after tasks run
  require('jit-grunt')(grunt); // Load all Grunt tasks

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      source: 'source',
      dist: 'dist',
      tmp: '.tmp'
    },
    checkDependencies: {
      npm: {
        options: {
          packageManager: 'npm',
          install: true,
          continueAfterInstall: true
        }
      },
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      }
    },
    assemble: {
      options: {
        flatten: true,
        partials: ['<%= yeoman.source %>/_includes/**/*.hbs'],
        layoutdir: '<%= yeoman.source %>/_layouts',
        layout: 'default.hbs',
        data: '<%= yeoman.source %>/_data/*.json'
      },
      files: {
        '<%= yeoman.dist %>/': ['<%= yeoman.source %>/**/*.hbs' ]
      },
      dist: {
        files: [{
          expand: true,
          dot: true,
          src: [
            '<%= yeoman.source %>/**/*.hbs',
            '!**/_*{,/**}', // exclude .hbs files in folders prefixed with underscore
          ],
          dest: '<%= yeoman.tmp %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.source %>',
          src: [
            // Assemble processes and moves HTML and text files
            // Copy moves asset files and directories
            'scripts/**/*',
            'images/**/*',
            'fonts/**/*',
            '!**/_*{,/**}', // Exclude files & folders prefixed with an underscore
            // Explicitly add any files your site needs for distribution here
            // ex: './vendor/jquery/jquery.js',
            'favicon.ico',
            // 'apple-touch*.png'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      },
      tmp: {
        files: [{
          cwd: '<%= yeoman.tmp %>/source',
          expand: true,
          flatten: false,
          src: [
            '**/*'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      },
    },
    sass: {
      options: {
        paths: [
          './vendor',
          './vendor/bower_components'
        ],
      },
      dist: {
        options: {
          compress: false,
          debugInfo: false,
          lineNumbers: false,
          // optimization: 2,
          yuicompress: false,
          sourceMap: false,
          sourceMapBasepath: 'app/',
          sourceMapRootpath: '../'
        },
        files: {
          'dist/styles/main.css': '<%= yeoman.source %>/styles/main.scss'
        }
      }
    },
    concat: {
      styles: {
        src: ['<%= yeoman.dist %>/styles/*.css'],
        dest: '<%= yeoman.dist %>/styles/main.css'
      },
      scripts: {
        src: ['<%= yeoman.dist %>/scripts/*.js'],
        dest: '<%= yeoman.dist %>/scripts/app.js'
      }
    },
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/styles',
          src: ['*.css', '!*.min.css'],
          dest: '<%= yeoman.dist %>/styles',
          ext: '.css'
        }]
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/scripts/app.js': ['<%= yeoman.dist %>/scripts/app.js']
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: false
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    browserSync: {
      server: {
        bsFiles: {
          src: [
            '<%= yeoman.dist %>/**/*'
          ]
        },
        options: {
          server: {
            baseDir: '<%= yeoman.dist %>/'
          },
          open: true,
          watchTask: true,
          notify: false,
          xip: false
        }
      }
    },
    watch: {
      styles: {
        files: ['<%= yeoman.source %>/styles/**/*.scss'],
        tasks: ['sass:dist']
      },
      scripts: {
        files: ['<%= yeoman.source %>/scripts/**/*.js'],
        tasks: ['copy:dist', 'eslint:app']
      },
      pages: {
        files: ['<%= yeoman.source %>/**/*.hbs'],
        tasks: ['newer:assemble:dist', 'copy:tmp']
      },
      images: {
        files: ['<%= yeoman.source %>/images/**/*'],
        tasks: ['copy:dist']
      }
    },
    eslint: {
      options: {
        configFile: '.eslintrc',
        format: 'node_modules/eslint-tap'
      },
      app: [
        'Gruntfile.js',
        '<%= yeoman.source %>/scripts/**/*.js',
        '!<%= yeoman.source %>/scripts/vendor/**/*'
      ],
      dist: [
        '<%= yeoman.dist %>/scripts/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      dist: {
        src: ['<%= yeoman.dist %>/styles/main.css']
      }
    },
    uncss: {
      dist: {
        files : {
          '<%= yeoman.dist %>/styles/main.css': [
            '<%= yeoman.dist %>/**/*.html'
          ]
        }
      }
    },
    md2html: {
      multiple_files: {
        options: {},
        files: [{
          expand: true,
          cwd: '<%= yeoman.source %>/_release-notes-markdown/',
          src: ['**/*.md'],
          dest: '<%= yeoman.source %>/_includes/release-notes',
          ext: '.hbs'
        }]
      }
    },
    ftpush: {
      build: {
        auth: {
          host: 'hcaprototype.com',
          port: 21,
          authKey: 'key1'
        },
        //distribute from the dist folder
        src: '<%= yeoman.dist %>',
        //distribute to this directory
        dest: 'hcadesignsystem.com/html/',
        //exclude the .git directory from distribution
        exclusions: ['<%= yeoman.dist %>/.git'],
        //keep: ['/important/images/at/server/*.jpg']
      }
    }
  });

  // Define Tasks
  grunt.registerTask('serve', [
    'md2html',
    'checkDependencies',
    'clean:dist',
    'assemble:dist',
    'copy:tmp',
    'copy:dist',
    'sass:dist',
    'eslint:app',
    'browserSync',
    'watch'
  ]);

  grunt.registerTask('check', [
    'checkDependencies',
    'clean:dist',
    'assemble:dist',
    'copy:tmp',
    'copy:dist',
    'sass:dist',
    'eslint:app',
    'eslint:dist',
    'csslint:dist'
  ]);

  grunt.registerTask('build', [
    'md2html',
    'checkDependencies',
    'clean:dist',
    'assemble:dist',
    'copy:tmp',
    'md2html',
    'copy:dist',
    'sass:dist',
    'eslint:dist',
    'concat:scripts',
    'concat:styles',
    'uglify:dist',
    'cssmin:dist',
    'imagemin:dist',
    'svgmin:dist',
    'htmlmin:dist'
  ]);

  grunt.registerTask('deploy', [
    'build',
    'ftpush'
  ]);

  grunt.registerTask('default', [
    'serve'
  ]);
};
