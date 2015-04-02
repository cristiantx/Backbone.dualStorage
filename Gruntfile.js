module.exports = function (grunt) {
	'use strict';

	var path = require('path');

	// Project configuration
	grunt.initConfig({
		compile: {
			options: {
				sourceMap: true
			},
			files: {
				'backbone.dualstorage.js': 'lib/backbone.dualstorage.coffee'
			}
		}
	});

	require('load-grunt-tasks')(grunt, { scope: 'devDependencies' });
	require('time-grunt')(grunt);

};
