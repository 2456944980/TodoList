const baseConfig = require('./webpack.base.js')
const {merge} = require('webpack-merge')

const prodConfig = {
    mode: 'production',//开发时设置为development的环境
}

module.exports = merge(baseConfig, prodConfig)