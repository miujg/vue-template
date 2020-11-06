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
      axios({
        url: '/mjg/test'
      }).then((res) => {
        this.user = res.data.data
      })
    }
  }
</script>

<style lang="scss">
  .user-wrapper {
    padding: 20px;
  }
</style>