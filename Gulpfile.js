'use strict'

const path = require('path')
const gulp = require('gulp')
const plugins = require('gulp-load-plugins')()
const stats = require('gulp-stats')
const webpack = require("webpack")
const webpackConfig = require('./webpack.config')

stats(gulp)

gulp.task('dev', function () {
	plugins.nodemon({
		script: 'server/index.js',
		ext: '.js',
		env: { 'NODE_ENV': 'development' },
		ignore: ['node_modules/', 'docs/', 'client/js/bundle.min.js']
	})
	.on('start', ['build'])
	.on('change', ['build'])
})

gulp.task('webpack', function (done) {
		webpack(webpackConfig, function (err, stats) {
			if (err) throw new plugins.util.PluginError("webpack", err);
      //plugins.util.log("[webpack]", stats.toString());
		})
})

gulp.task('apidoc', function(done) {
	plugins.apidoc({
		src: "server/",
		dest: "docs/"
	}, done)
})

gulp.task('build', ['webpack', 'apidoc'])
gulp.task('default', ['dev'])
