module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {                                   
            dist: {        
                files: {    
                    'app/css/app.css': 'app/scss/app.scss'
                }  
            },
            dev: {
                files: {
                    'app/css/app.css': 'app/scss/app.scss'
                }
            }
        },
        watch: {
            css: {
                files: ['app/scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            } 
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['sass']);
}