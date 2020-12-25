<template>
  <div class="user-wrapper">
    <div class="month">
      <div class="top">
        <span>11月 各科文化课及艺术专业</span> 
        <span>重庆</span>
      </div>
      <div class="bottom">
        <span>开通VIP</span>
        <span>开通后立享会员特权</span>
      </div>
    </div>
    <User>
      <!-- <span>xxx</span> -->
      <template v-slot:default="{user}">
        {{ user }}
      </template>
    </User>
    <to-list :todos="todos"> </to-list>

    <h1>-------</h1>
    
    <to-list :todos="todos"> 
      <template v-slot:todo="{todo}">
        <el-checkbox v-model="todo.active"></el-checkbox>
        <h1>{{todo.text}}</h1>
      </template>
    </to-list>

  </div>
</template>

<script>
  import User from '../user/index'
  import ToList from '../toList.vue'

  export default {
    components: {
      User,
      ToList
    },
    data() {
      return {
        user: {},
        todos: [
          {id: 1, text: '1111', active: true},
          {id: 2, text: '2222', active: false},
          {id: 3, text: '3333', active: false},
        ]
      }
    },
    methods: {
      goUser() {
        this.$router.push('/user')
      }
    },
    mounted() {
      axios({
        url: '/mjg/test'
      }).then((res) => {
        this.user = res.data.data
      })
    }
  }
</script>

<style lang="scss">
  @import './index.scss'
</style>