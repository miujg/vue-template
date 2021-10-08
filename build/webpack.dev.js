const { merge } = require('webpack-merge'),
    base = require('./webpack.config'),
    path = require('path'),
    webpack = require('webpack'),
    buidConfig = require('./build-config'),
    ESLintPlugin = require('eslint-webpack-plugin')

buidConfig.scssRule.unshift('style-loader')

const ressult = merge(base, {
    mode: 'development',
    devServer: {
        // 启用热更新
        hot: true,
        port: buidConfig.devPort,
        // contentBase: path.resolve(__dirname, '../dist'),
        compress: true,
        // 代理配置
        proxy: {
            '/': {
                target: 'http://10.10.0.135:8899',
                changeOrigin : true, // 域名
                secure: false, // 是否支持https
                // pathRewrite: {'^/dataserver': ''} // 重写url
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: buidConfig.scssRule
            },
            {
                test: /\.css/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [ 
        // new webpack.NamedModulesPlugin(),
        // 热更新插件
        // new webpack.HotModuleReplacementPlugin()
        new ESLintPlugin({
          extensions: ['js', 'ts', 'vue']
        })
    ],
    // http://webpack.docschina.org/configuration/devtool/ 这里有一个表，总结得非常全面。
    // 1. source-map:  源码映射，会生成map文件，标识错误的列和行 。 大而全， 而且生成独立的额文件
    // 2. eval-source-map 不会产生单独的文件 将map文件集成到文件中。会表示错误的行和列。 对比source-map 是要小一些
    devtool: 'eval-source-map',
})


module.exports = ressult