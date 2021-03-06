//业务代码放在src文件，main.js作为项目的总入口文件
//创建Vue根实例
import Vue from 'vue'

//导入App组件
import App from './App.vue'

//创建Vue根实例
new Vue({
    el: '#app',
    components: {
        App: App//组件名：组件对象,键值相等的时候，可以简写为App
    },
    template: '<App/>'
})
//挂载APP组件
