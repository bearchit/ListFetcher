module.exports = function(grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: "\n\n"
      },
      dist: {
        src: [
          'src/**/*.js'
        ],
        dest: 'dist/<%= pkg.name.replace(".js", "") %>.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name.replace(".js", "") %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name.replace(".js", "") %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    jshint: {
      files: ['dist/ListFetcher.js'],
      options: {
        globals: {
          console: true,
          module: true,
          document: true
        },
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    watch: {
      files: [
        'src/**/*.js',
        'test/**/*.js'
      ],
      tasks: ['test']
    },

    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      } 
    }

  });

  grunt.registerTask('build', [
    'concat',
    'uglify'
  ]);

  grunt.registerTask('test', [
    'build',
    'karma'
  ]);
  
  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);

};
