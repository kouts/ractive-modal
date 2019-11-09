const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
    {
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
                    test: /\.css$/,
                    use: ['raw-loader']
                },            
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
    },
    {
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
            new MiniCssExtractPlugin({
                filename: 'ractive-modal-styles.css'
            })
        ],
        entry: {
            'ractive-modal-no-css': path.resolve(__dirname, './src/ractive-modal.ractive.html'),
            'ractive-modal-no-css.min': path.resolve(__dirname, './src/ractive-modal.ractive.html')
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
                    test: /\.css$/,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                },
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
]