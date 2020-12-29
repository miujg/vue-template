<template>
  <div class="user-wrapper">
    <h1 @click="goUser">个人信息：</h1>
    <p><span>姓名：</span><span>{{user.name}}</span></p>
    <p><span>年龄：</span><span>{{user.age}}</span></p>
    <p><span>邮箱：</span><span>{{user.email}}</span></p>
    <p><span>简介：</span><span>{{user.desc}}</span></p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        user: {}
      }
    },
    methods: {
      goUser() {
        this.$router.push('/user')
      }
    },
    mounted() {
      var data = new FormData()
      data.set('name', 'xxx')

      // axios({
      //   url: 'http://127.0.0.1:3000/user',
      //   data: {name: 'xxx'},
      //   method: 'post',
      //   headers: {
      //     'Content-Type': 'application/json;charset=UTF-8'
      //     // 'Content-Type': 'multipart/form-data;charset=utf-8'
      //   }
      // })


      axios({
        url: 'http://127.0.0.1:3000/user',
        method: 'put'
      })
    }
  }
</script>

<style lang="scss">
  .user-wrapper {
    padding: 20px;
  }
</style>