// const autoprefixer = require('autoprefixer');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const sugarss = require('sugarss');

module.exports = (env, argv) => {
	function isDevelopment() {
		return argv.mode === 'development';
	}
	const config = {
		entry: {
			editor: './src/editor.js',
			script: './src/script.js',
		},
		output: {
			filename: '[name].js',
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					sourceMap: true,
				}),
				new CssMinimizerPlugin({
					parallel: false,
					minimizerOptions: {
						processorOptions: {
							parser: sugarss,
						},
					},
				}),
			],
		},
		plugins: [
			new CleanWebpackPlugin(),
			new MiniCSSExtractPlugin({
				chunkFilename: '[id].css',
				filename: (chunkData) => {
					return chunkData.chunk.name === 'script'
						? 'style.css'
						: '[name].css';
				},
			}),
		],
		devtool: isDevelopment() ? 'cheap-module-source-map' : 'source-map',
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								'@babel/preset-env',
								[
									'@babel/preset-react',
									{
										pragma: 'React.createElement',
										pragmaFrag: 'React.Fragment',
										development: isDevelopment(),
									},
								],
							],
						},
					},
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						MiniCSSExtractPlugin.loader,
						'css-loader',
						'sass-loader',
					],
				},
			],
		},
		externals: {
			'@wordpress/blocks': ['wp', 'blocks'],
			'@wordpress/i18n': ['wp', 'i18n'],
			'@wordpress/block-editor': ['wp', 'blockEditor'],
			'@wordpress/element': ['wp', 'element'],
			'@wordpress/components': ['wp', 'components'],
		},
	};
	return config;
};
