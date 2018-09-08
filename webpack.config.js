const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: {
		app: ['babel-polyfill', './src/index.tsx']
	},
	output: {
		filename: "assets/js/[name][hash].js",
		path: __dirname+ "/dist"
	},
	devtool: "source-map",
	resolve: {
		extensions: [".ts",".tsx",".js",".json"]
	},
	module: {
		rules: [
			{ test:/\.tsx?$/,loader: "awesome-typescript-loader" },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	]
}