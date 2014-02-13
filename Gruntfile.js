module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		simplemocha: {
			options: {
				timeout: 3000,
				ignoreLeaks: false,
				reporter: 'tap'
			},
			all: { src: ['test/**/*.js']}
		},
		jshint: {
			myFiles: ['card.js', 'counter.js', 'test/**/*.js'],
			options: {
				jshintrc: '.jshintrc'
			}
		}
	});

	grunt.loadNpmTasks('grunt-simple-mocha');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['simplemocha', 'jshint']);
	
};