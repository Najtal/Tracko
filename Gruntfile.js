'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

		shell: {
		    startMongoDB: {
		        command: 'mongod --dbpath ./data --storageEngine=mmapv1',
		        options: {
		            async: true,
		            stdout: false,
		            stderr: true,
		            failOnError: true,
		            execOptions: {
		                cwd: '.'
		            }
		        }
		    },
		    startServer: {
		        command: 'npm start',
		        options: {
		            async: false,
		            stdout: true,
		            stderr: true,
		            failOnError: true,
		            execOptions: {
		                cwd: '.'
		            }
		        }
		    }
		},

    });

	grunt.loadNpmTasks('grunt-shell-spawn');
    grunt.registerTask('default', ['shell:startMongoDB', 'shell:startServer']);

};
