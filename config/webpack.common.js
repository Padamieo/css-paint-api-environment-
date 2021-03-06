const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: '[name].[contenthash].css'
});

module.exports = {
	context: path.join(process.cwd(), 'src'), //the home directory for webpack
	devtool: 'source-map', // enhance debugging by adding meta info for the browser devtools
	entry: {
		app: './index.js'
	},
	output: {
		path: path.join(process.cwd(), 'dist'),
		filename: '[name].[hash].js',
		publicPath: '/',
		sourceMapFilename: '[name].map'
	},
	resolve: {
		extensions: ['.js'],  // extensions that are used
		modules: [path.join(process.cwd(), 'src'), 'node_modules'] // directories where to look for modules
	},
	module: {
		rules: [{
			test: /\.css$/,
			exclude: /node_modules/,
			use: [
				'style-loader',
				'css-loader?sourceMap',
	      'postcss-loader',
			],
		},{
			test: /\.js$/,
			exclude: ['/node_modules/','*.paint.js'],
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		},{
			test: /\.(paint.js)$/,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[hash]-[name].[ext]'
				}
			}]
		}]
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {root: process.cwd()}),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
};
