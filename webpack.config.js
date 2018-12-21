const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	node: false,
	mode: 'production',
    target: 'web',
    context: path.resolve(__dirname, 'src'),
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/
        })]
    },
    plugins: [
    ],
    entry: {
        'ractive-modal': path.resolve(__dirname, './src/ractive-modal.ractive.html'),
        'ractive-modal.min': path.resolve(__dirname, './src/ractive-modal.ractive.html')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'RactiveModal',
        libraryTarget: 'umd',
        libraryExport: 'default'
    },
    externals: {
    	ractive: {
    		commonjs: 'ractive',
    		commonjs2: 'ractive',
    		amd: 'ractive',
    		root: 'Ractive'
    	}
    },
    module: {
        rules: [
            {
                test: /\.ractive\.html$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'ractive-bin-loader'
                    }                    
                ]
            }
        ]
    }
}