module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: false
                },
                files: {
                    'dist/styles/main.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],    
                tasks: ['less:development']
            },
            html: {
                files: ['src/scripts/main.js'],
                tasks: ['default']
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.js': 'src/scripts/main.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('compile-less', ['less:development']);
    grunt.registerTask('default', ['less:development', 'uglify', 'watch']);
};