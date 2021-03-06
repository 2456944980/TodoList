const baseConfig = require('./webpack.base.js')
const { merge } = require('webpack-merge')
//引入webpack插件
const webpack = require('webpack')

const devConfig = {
    mode: 'development',

    /*  开发时设置为development的环境,在 开发环境 中，我们需要具有强大的、
        具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 
        和 localhost server。
        在 生产环境 中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，
        以改善加载时间 */

    devtool: 'eval',
    // devServer配置
    devServer: {
        // 指定服务器根目录
        contentBase: './dist',
        // 自动打开浏览器
        open: true,
        hot: true
    },

    //插件
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    /*不加下面这一段话会报错： 
    [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. 
    Either pre-compile the templates into render functions, or use the compiler-included build. 
    因为Vue 会打包生成三个文件:
    runtime only 的文件 vue.common.js
    compiler only 的文件 compiler.js
    runtime + compiler 的文件 vue.js
    而默认导出的是 vue.common.js*/
    /* resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.vue' ],
        alias: {
            'vue': '@vue/runtime-dom'
        }  
    } */
}

module.exports = merge(baseConfig, devConfig)