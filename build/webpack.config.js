/**
 * webpack 公共模块 
 */
const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin')
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    webpack = require('webpack'),
    Happypack = require('happypack'),
    buidConfig = require('./build-config'),
    VueLoaderPlugin = require('vue-loader/lib/plugin'),
    // 依赖关系分析插件
    // BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        // 设置publicpath 详细看：https://www.bilibili.com/video/av51693431?p=11
        // publicPath: 'http://127.0.0.1:8080/'
    },
    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 20000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            automaticNameDelimiter: '~',
            enforceSizeThreshold: 50000,
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/public/index.html'),
            title: buidConfig.htmlTitle,
            // 导入dll文件
            scripts: buidConfig.createScripts([buidConfig.dllName]),
            inject: true,
            favicon: path.resolve(__dirname, '../src/public/logo.png'),
        }),
        //  webpack相关插件
        new webpack.ProvidePlugin({
            // 全局变量引入
            // $: 'jquery'
            "axios": "axios",
        }),
        // dll 引用
        new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, '../dll', 'manifest.json')
        }),
        // copy dll 文件
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../dll'),
                to: './'
            }
        ]), 
        // 
        new webpack.IgnorePlugin(/\.\/locale/,/moment/),
        // vue
        new VueLoaderPlugin(),
        // 依赖关系分析
        // new BundleAnalyzerPlugin()
    ],
    module: {
        noParse: /jquery|lodash/,
        rules: [
            // 文件处理
            {
                test: /\.(jpg|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 这里的单位是byte 字节
                            limit: 200 * 1024,
                            // 输出到相应的目录
                            outputPath: 'img/',
                            // 图片可以单独加域名
                            // publicPath: '',
                            esModule: false
                        },
                    },
                ]
            },
            // 字体文件处理
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                use: ['file-loader']
            },
            // js处理
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src'),
                use: [{
                    loader: 'babel-loader',
                    options: {
                        // 配置一些语言转换文件， jsx
                        presets: ['@babel/preset-env'],
                        // 一些特殊语法的配置 如： class 装饰器 生成器 遇到的时候再行配置。
                        plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-runtime']
                    }
                }]
            },
            // vue文件
            {
                test: /\.vue/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src'),
                use: [{
                    loader: 'vue-loader'
                }],
            }
        ]
    },
    resolve: {
        // 关于第三方模块只会在此文件夹下面找，不会向上找
        modules: [path.resolve('node_modules')],
        extensions: ['.js', '.vue', '.jsx'],
        // 别名
        alias: {
            '@': path.join(process.cwd(), 'src'),
            images: path.join(process.cwd(), 'src/public/images'),
            com: path.join(process.cwd(),'src/component'),
            con: path.join(process.cwd(), 'src/containers'),
            action: path.join(process.cwd(), 'src/redux/action')
        }
    },
    
}