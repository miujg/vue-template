/**
 * webpack 公共模块
 */
const path = require("path"),
  HtmlWebpackPlugin = require("html-webpack-plugin");
  CopyWebpackPlugin = require("copy-webpack-plugin"),
  webpack = require("webpack"),
  Happypack = require("happypack"),
  buidConfig = require("./build-config"),
  { VueLoaderPlugin } = require("vue-loader"),
  
// 依赖关系分析插件
// BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  entry: path.resolve(__dirname, "../src/main.ts"),
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    chunkFilename: "[name].lazy-chunk.js",
    // 设置publicpath 详细看：https://www.bilibili.com/video/av51693431?p=11
    // publicPath: 'http://127.0.0.1:8080/'
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: "async",
  //     // 单位：字节。当生成块大于此数值才会进行分割，默认值为2000字节
  //     minSize: 1,
  //     maxSize: 0,
  //     minChunks: 1,
  //     // 按需加载时并行请求的最大数量将小于或者等于30
  //     maxAsyncRequests: 30,
  //     // 初始页面加载时并行请求的最大数量将小于30
  //     maxInitialRequests: 30,
  //     automaticNameDelimiter: "~",
  //     enforceSizeThreshold: 50000,
  //     cacheGroups: {
  //       // commons: {
  //       //     test: path.resolve(__dirname, '../src/containers'),
  //       //     name: 'commons',
  //       //     chunks: 'all'
  //       // },
  //       // 提取来自node_modules的包
  //       vendors: {
  //         // 兼容unix和windows的写法
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors",
  //         chunks: "all",
  //       },
  //       // mock: {
  //       //     test: /[\\/]node_modules[\\/]mockjs[\\/]/,
  //       //     name: "mock",
  //       //     chunks: "all"
  //       // }
  //     },
  //   },
  // },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../src/public/index.html"),
      title: buidConfig.htmlTitle,
      // 导入dll文件
      // scripts: buidConfig.createScripts([buidConfig.dllName]),
      inject: true,
      favicon: path.resolve(__dirname, "../src/public/logo.png"),
    }),
    //  webpack相关插件
    new webpack.ProvidePlugin({
      // 全局变量引入
      // $: 'jquery'
      axios: "axios",
    }),
    // dll 引用
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, "../dll", "manifest.json"),
    // }),
    // // // copy dll 文件
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, "../dll"),
    //     to: "./",
    //   },
    // ]),
    //
    // new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    // webpack5 新语法
    new webpack.IgnorePlugin({
      checkResource(resource) {
        return false
      }
    })
    // 依赖关系分析
    // new BundleAnalyzerPlugin()
  ],
  module: {
    noParse: /jquery|lodash/,
    rules: [
      // vue文件
      {
        test: /\.vue/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "../src"),
        use: [
          {
            loader: "vue-loader",
            options: { hotReload: true }
          },
        ],
      },
      // md文件处理
      // ts
      {
        test: /\.(t|j)s$/,
        exclude: /node_modules/,
        // include: path.resolve(__dirname, "../src"),
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      // 文件处理
      {
        test: /\.(jpg|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // 这里的单位是byte 字节
              limit: 200 * 1024,
              // 输出到相应的目录
              outputPath: "img/",
              // 图片可以单独加域名
              // publicPath: '',
              esModule: false,
            },
          },
        ],
      },
      // 字体文件处理
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    // 关于第三方模块只会在此文件夹下面找，不会向上找
    modules: [path.resolve("node_modules")],
    extensions: [".js", ".ts",".vue", ".jsx"],
    // 别名
    alias: {
      "@": path.join(process.cwd(), "src"),
      images: path.join(process.cwd(), "src/public/images"),
      com: path.join(process.cwd(), "src/component"),
      con: path.join(process.cwd(), "src/containers"),
      action: path.join(process.cwd(), "src/redux/action"),
    },
  },
};
