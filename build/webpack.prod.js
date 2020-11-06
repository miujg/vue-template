
const {smart} = require('webpack-merge'),
    base = require('./webpack.config'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'), // 用于css分离
    buidConfig = require('./build-config')
    // BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

buidConfig.scssRule.unshift({
    loader: MiniCssExtractPlugin.loader,
    options:{
        publicPath: '../',
    }
})

module.exports = smart(base, {
    mode: 'production',
    performance: {
        // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告...
        hints: "warning",
        // 开发环境设置较大防止警告
        // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
        maxEntrypointSize: 5000000, 
        // 最大单个资源体积，默认250000 (bytes)
        maxAssetSize: 3000000
    },
    plugins: [
        new CleanWebpackPlugin(),
        // css分离
        new MiniCssExtractPlugin({
            // 输出到特定目录下 
            filename: 'css/index.css',
        }),
        // new BundleAnalyzerPlugin()
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