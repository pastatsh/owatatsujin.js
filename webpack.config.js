const webpack = require("webpack");

module.exports = {
	entry: './src/main.js',
	output: {
		filename: './public/owata.min.js'
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.DefinePlugin({ Const: require("./src/const") })
	]
};