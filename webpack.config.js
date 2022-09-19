const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const packageJson = require('./package.json');
const Dotenv = require('dotenv-webpack');

module.exports = () => {

    process.env.NODE_ENV = 'development';

    let outFolder = 'my_build';

    return {
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].bundle.css',
                chunkFilename: '[id].css'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "public/index.html"),
                inject: true,
                scriptLoading: 'blocking',
                publicPath: packageJson.homepage ? packageJson.homepage : '/',
            }),
            new Dotenv({
                // path: `./environments/.env${env.file ? `.${env.file}` : ''}`
                path: `./.env`
            }),
            // new webpack.DefinePlugin({
            //     "process.env": process.env,
            // }),
            new webpack.ProvidePlugin({
                process: 'process/browser',
            }),
        ],
        entry: path.resolve(__dirname, 'src', 'index.js'),
        output: {
            path: path.resolve(__dirname, outFolder),
            filename: 'bundle.js'
        },
        devServer: {
            contentBase: path.resolve(__dirname, outFolder),
            open: true,
            clientLogLevel: 'silent',
            port: 9000,
            historyApiFallback: true,
            hot: true
        },
        module: {
            rules: [
                {
                    test: /\.(jsx|js)$/,
                    include: path.resolve(__dirname, 'src'),
                    exclude: /node_modules/,
                    use: [{
                        loader: require.resolve('babel-loader'),
                        options: {
                            customize: require.resolve(
                                'babel-preset-react-app/webpack-overrides'
                            ),
                            // Add this back
                            presets: [
                                [
                                    require.resolve('babel-preset-react-app'),
                                    {
                                        runtime: 'automatic',
                                    },
                                ],
                            ],
                        }
                    }]
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        "style-loader",
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ],
        },
        optimization: {
            minimize: true,
            minimizer: [
                (compiler) => {
                    new TerserPlugin({
                        /* your config */
                        test: /\.js(\?.*)?$/i,
                        extractComments: true,
                        // minify: TerserPlugin.uglifyJsMinify,
                        terserOptions: {
                            compress: true,
                        },
                    }).apply(compiler);
                },
            ],
        },
        devtool: "hidden-nosources-source-map"
    }
}
