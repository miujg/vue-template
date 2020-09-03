const {smart} = require('webpack-merge'),
    base = require('./webpack.config'),
    path = require('path'),
    webpack = require('webpack'),
    buidConfig = require('./build-config')

buidConfig.scssRule.unshift('style-loader')

const ressult = smart(base, {
    mode: 'development',
    devServer: {
        // 启用热更新
        hot: true,
        port: buidConfig.devPort,
        contentBase: path.resolve(__dirname, '../dist'),
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
        new webpack.NamedModulesPlugin(),
        // 热更新插件
        new webpack.HotModuleReplacementPlugin()
    ]
})


module.exports = ressult