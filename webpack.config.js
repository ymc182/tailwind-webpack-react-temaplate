const path = require("path");
const webpack = require("webpack");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
	entry: "./src/index.jsx",

	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
	},
	mode: "development",
	plugins: [
		new NodePolyfillPlugin(),
		new CopyPlugin({
			patterns: [{ from: "public", to: "./" }],
		}),
	],
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist"),
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true,
	},
	stats: {
		colors: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				resolve: {
					extensions: [".js", ".jsx"],
				},
				use: ["babel-loader"],
			},
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, "src"),
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ["file-loader"],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ["file-loader"],
			},
			{
				//for json
				test: /\.json$/,
				use: ["json-loader"],
			},
		],
	},
};
