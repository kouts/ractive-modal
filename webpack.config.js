var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common');

// Lazymode so we don't have to require Ractive in every component / endpoint / etc
var providerPlugin = new webpack.ProvidePlugin({
	Ractive: 'ractive'
});

// Minify javascript
var minifyPlugin = new webpack.optimize.UglifyJsPlugin({
	include: /\.min\.js$/,
	compress: {
		warnings: false
	}
});

module.exports = {
	module: {
	  loaders: [
	    {
	      test: /\.ractive\.html$/,
	      loaders: 'ractive-bin-loader'
	    }
	  ]
	},
	plugins: [
		// providerPlugin,
		minifyPlugin
	],
	/*
	externals: {
	  ractive: 'Ractive'
	},
	*/
	target: 'web',
	entry: {
		'ractive-modal': './src/ractive-modal.ractive.html',
		'ractive-modal.min': './src/ractive-modal.ractive.html'
	},
  	output: {
	    filename: '[name].js',
	    path: path.resolve(__dirname, 'dist'),
	    library: "RactiveModal",
	    libraryExport: "default",
		libraryTarget: "umd"
  	}
};