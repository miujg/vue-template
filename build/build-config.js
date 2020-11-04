// webpack 配置文件及其工具方法

const config = {
    devUrl: "localhost",
    devPort: '8086',
    htmlTitle: "vue-template",
    dllName: '_dll_vue',
    scssRule: [
        'css-loader',
        {
            loader: 'postcss-loader',
            options: {
                plugins:[
                    require('autoprefixer')({
                        overrideBrowserslist: ['last 15 versions']
                    })
                ]
            }
        },
        'sass-loader'
    ],
    createScripts: (scripts) => scripts.map(script => `<script src="${script}.js"></script> `).join(' ')
}
module.exports = config 