module.exports = function(grunt) {

    //Task configuration
    grunt.initConfig({
//        pkg: grunt.file.readJSON('package.json'),     <-- Not currently needed, may be handy in the future
        uglify: {
            app: {
                files: {
                    'public/app.js': ['static/app/js/**/*.js']
                }
            }
        },
        concat: {
            dist: {
                src: ['static/vendor/angular.min.js'],
                dest: 'public/vendor.js'
            }
        },
        sass: {
            dist: {
                files: {
                    'public/style.css':     'static/app/css/style.scss'
                }
            }
        },
        watch: {
            uglify: {
                files: ['static/app/js/**/*.js'],
                tasks: ['uglify'],
                options: {
                }
            },
            concat: {
                files: ['static/vendor/angular.min.js'],
                tasks: ['concat'],
                options: {
                }
            },
            sass: {
                files: ['static/app/css/style.scss'],
                tasks: ['sass'],
                options: {
                }
            }
        }
    });

    //Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //Default task: (re-)compile everything (watch must be called manually)
    grunt.registerTask('default', ['uglify', 'concat', 'sass']);

};