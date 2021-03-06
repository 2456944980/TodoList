<template>
  <div>
    <!-- 驼峰写法一般转换为小写带横杠的写法 -->
    <main-header></main-header>
    <main-todo></main-todo>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import './assets/styles/global.styl'

  import MainHeader from './components/MainHeader.vue'

  import MainTodo from './components/MainTodo&/MainTodo.vue'

  import MainFooter from './components/MainFooter.vue'

  export default {
    name: 'App',
    components: {
      MainHeader: MainHeader,
      MainTodo,
      MainFooter,
    },
  }
</script>

<style lang="stylus" scoped></style>