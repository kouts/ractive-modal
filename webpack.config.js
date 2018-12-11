const webpack = require('webpack');
const path = require('path');

module.exports = {
	node: false,
	mode: 'development',
    target: 'web',
    context: path.resolve(__dirname, 'src'),
    plugins: [
    ],    
    entry: {
        'ractive-modal': path.resolve(__dirname, './src/ractive-modal.ractive.html')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: 'RactiveModal',
        libraryTarget: 'umd'
    },
    externals: {
    	ractive: {
    		commonjs: 'Ractive',
    		commonjs2: 'Ractive',
    		amd: 'Ractive',
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