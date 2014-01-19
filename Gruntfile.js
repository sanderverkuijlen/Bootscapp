module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            app: {
                options: {
//                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> <%= pkg.euthor %> */\n'
                },
                files: {
                    'public/app.js': ['static/app/js/**/*.js']
                }
            }
        },
        concat: {
            options: {
//                separator: ';'
            },
            dist: {
                src: ['static/vendor/angular.min.js'],
                dest: 'public/vendor.js'
            }
        },
        sass: {
            dist: {
                options: {
                },
                files: {
                    'public/style.css':     'static/app/css/style.scss'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'concat', 'sass']);

};