<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="你准备做什么？"
      autofocus
      v-model="content"
      @keyup.enter="addTodo"
    />

    <todo-item
      v-for="(item, index) in filterData"
      :key="index"
      :todo="item"
      @del="handleDeleteItem"
    ></todo-item>
    <todo-info
      :total="total"
      @toggleState="handleToggleState"
      @clearCompleted="handleClear"
    ></todo-info
    ><!--  @toggleState="handleToggleState" -->
  </div>
</template>

<script>
  import TodoItem from './coms/TodoItem.vue'
  import TodoInfo from './coms/TodoInfo.vue'

  let id = 0

  export default {
    name: 'MainTodo', //与对应的文件名保持一致
    data() {
      return {
        todoData: [],
        content: '',
        total: 0,
        filter: '全部',
      }
    },
    methods: {
      addTodo() {
        if (this.content === '') return
        this.todoData.unshift({
          id: id++,
          content: this.content,
          completed: false,
        })
        this.content = ''
      },
      handleDeleteItem(id) {
        this.todoData.splice(
          this.todoData.findIndex((item) => item.id == id),
          1
        )
      },
      handleToggleState(state) {
        this.filter = state
      },
      handleClear() {
        this.todoData = this.todoData.filter((item) => item.completed == false)
      },
    },

    watch: {
      todoData: {
        deep: true,
        handler() {
          this.total = this.todoData.filter(
            (item) => item.completed == false
          ).length
        },
      },
    },
    computed: {
      filterData() {
        switch (this.filter) {
          case '全部':
            return this.todoData
            break
          case '待办':
            return this.todoData.filter((item) => item.completed == false)
            break
          case '已完成':
            return this.todoData.filter((item) => item.completed == true)
            break
        }
      },
    },
    components: {
      TodoItem,
      TodoInfo,
    },
  }
</script>

<style lang='stylus' scoped>
  .main-todo
    margin: 0 auto
    width: 600px
    background-color: white
    box-shadow: 0 0 5px #666

    .add-todo
      padding: 16px 16px 16px 36px
      width: 100%
      font-size: 24px
      font-weight: inherit
      font-family: inherit
      color: inherit
      border: none
      outline: none
      box-sizing: border-box
</style>