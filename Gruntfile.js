module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {                                    // task
            dist: {                                // target
                files: {                        // dictionary of files
                    'app/css/app.css': 'app/scss/app.scss'        // 'destination': 'source'
                }
            },
            dev: {
                files: {
                    'app/css/app.css': 'app/scss/app.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);
}