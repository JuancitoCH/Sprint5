const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports={
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        assetModuleFilename: 'assets/[name][ext]'

    },
    devServer:{
        port: 5500,
        static:{
            directory:path.resolve(__dirname,'build')
        }
    },
    optimization:{
        minimizer:[
            new CssMinimizerPlugin()
        ]
    },
    module:{
        rules:[
            { 
                test: /\.js$/, 
                exclude:/node_modules/,
                use: {loader:'babel-loader',options:{presets:['@babel/preset-env']}}
            },
            {
                test:/\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader', 
                        options:{
                            importLoaders:1
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            postcssOptions: {
                                plugins:[
                                    require('autoprefixer')({ overrideBrowserslist:['last 3 versions'] }) ]
                            }
                        }
                    },
                ]
            },
            {
                test:/\.scss$/,
                use:[
                        MiniCssExtractPlugin.loader,
                        {
                            loader:'css-loader', 
                            options:{
                                importLoaders:1,
                            }
                        },
                        {
                            loader:'postcss-loader',
                            options:{
                                postcssOptions: {
                                    plugins:[ require('autoprefixer')({ overrideBrowserslist:['last 3 versions'] }) ]
                                }
                            }
                        },
                        'sass-loader'
                    ]
            },
            {
                test:/\.(png|jpe?g|svg|gif|webp|obj|glb)$/,
                type: 'asset/resource',
            },
        ]
    },
    plugins: [
        new CssMinimizerPlugin(), 
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
    ],
}