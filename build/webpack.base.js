//导入path模块
const path = require('path')

//引入vue-loader的插件
const VueLoaderPlugin = require('vue-loader/lib/plugin')

//引入html-webpack-plugin插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

//引入插件在打包前删除dist目录下的JS文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {

    //打包入口文件
    entry: './src/main.js',

    //打包的出口文件
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../dist'),//指定打包路径，绝对路径
        //publicPath:'../dist/'
    },
    //打包规则
    module: {
        rules: [{   //规则是一个数组（很多规则）
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.vue$/,//遇到以vue结尾的文件，用vue-loader进行打包
            loader: 'vue-loader'
        }, {
            test: /\.(jpg|jpeg|png|svg)$/,
            loader: 'url-loader',
            options: {
                name: '[name].[ext]',//打包之后生成与原文件同名的图片文件
                limit: 2048//小于2048的时候以base64打包到JS中，大于就用file-loader打包
            }
        }, {
            test: /\.css$/,
            /* css-loader: 解决文件之间的依赖关系, 把所有的 css 文件打包成一个文件
            style-loader: 将 css-loader 打包完成后生成的文件挂载到页面的 head 标签的 style 中 */
            use: ['style-loader', 'css-loader']//顺序有讲究，按照从右到左，从下往上的顺序执行
        }, {
            test: /\.styl(us)?$/,
            use: [
                'style-loader',
                'css-loader',
                'stylus-loader']
        }]
    },
    //插件
    plugins: [
        new VueLoaderPlugin(),//实例化一个插件对象
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
    ],
    /*不加下面这一段话会报错： 
    [Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. 
    Either pre-compile the templates into render functions, or use the compiler-included build. 
    因为Vue 会打包生成三个文件:
    runtime only 的文件 vue.common.js
    compiler only 的文件 compiler.js
    runtime + compiler 的文件 vue.js
    而默认导出的是 vue.common.js*/
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js',
            '@': path.resolve(__dirname, '../src'),
            'styles': path.resolve(__dirname, '../src/assets/styles'),
            'images': path.resolve(__dirname, '../src/assets/images')
        }
    }
    /* resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.vue' ],
        alias: {
            'vue': '@vue/runtime-dom'
        }  
    } */
}