
const {smart} = require('webpack-merge'),
    base = require('./webpack.config'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'), // 用于css分离
    buidConfig = require('./build-config')

buidConfig.scssRule.unshift({
    loader: MiniCssExtractPlugin.loader,
    options:{
        publicPath: '../',
    }
})

module.exports = smart(base, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(),
        // css分离
        new MiniCssExtractPlugin({
            // 输出到特定目录下 
            filename: 'css/index.css',
        }),
    ],
    module: {
        rules: [
            // css处理
            {
                test: /\.scss/,
                use: buidConfig.scssRule
            },
            {
                test: /\.css/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    }
})