// webpack 配置文件及其工具方法
const path = require('path')

const config = {
    devUrl: "localhost",
    devPort: '8087',
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
        'sass-loader',   
        {
            loader: 'sass-resources-loader',
            options: {
                resources: [
                    path.join(process.cwd(), 'src/public/styles/_func.scss'),
                    path.join(process.cwd(), 'src/public/styles/_mixin.scss'),
                    path.join(process.cwd(), 'src/public/styles/_variable.scss'),
                ] 
            }
        },
        {
            loader: path.resolve(__dirname, './loader/px2rem-loader.js')
        },
        
    ],
    createScripts: (scripts) => scripts.map(script => `<script src="${script}.js"></script> `).join(' ')
}
module.exports = config 