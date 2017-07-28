module.exports = function(grunt) {
    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'src/data.js',
                    'src/input.js',
                    'src/sound.js',
                    'src/main.js'
                ],
                dest : 'owata.js'
            }
        },
        uglify: {
            js: {
                src: "owata.js",
                dest: "owata.min.js"
            }
        },
        watch: {
            js: {
                files: ["src/*.js"],
                tasks: ['concat', 'uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
};