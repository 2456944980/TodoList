<template>
  <div class="todo-info">
    <span class="total">{{ total }} 件待办</span>
    <div class="tabs">
      <a
        v-for="(item, index) in states"
        :key="index"
        :class="['btn', 'primary', 'border', state == item ? 'actived' : '']"
        @click="toggleState(item)"
        >{{ item }}</a
      >
    </div>
    <button class="btn info" @click="clearCompleted">Clear Completed</button>
  </div>
</template>

<script>
  export default {
    name: 'TodoInfo',
    props: {
      total: Number,
    },
    data() {
      return {
        states: ['全部', '待办', '已完成'],
        state: '全部',
      }
    },
    methods: {
      toggleState(state) {
        this.state = state
        this.$emit('toggleState', state) //后来加的
      },
      clearCompleted() {
        this.$emit('clearCompleted')
      },
    },
  }
</script>

<style lang="stylus" scoped>
  @import '~styles/theme.styl'
  @import '~styles/mixins.styl'

  .todo-info
    display: flex
    justify-content: space-between
    padding: 5px 10px
    font-weight: 400
    line-height: 30px
    border-top: 1px solid rgba(0 0 0 0.1)

    .total
      color: $red
      line-height: 30px

    .tabs
      display: flex
      justify-content: space-between
      width: 200px

    .btn.primary.border
      primaryBorderBtn()

      &.actived
        primaryBtn()

    .btn.info
      infoBtn()
</style>