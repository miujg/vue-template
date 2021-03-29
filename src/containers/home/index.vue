<template>
  <div class="user-wrapper">
    <h1 @click="goUser">个人信息：</h1>
    <p><span>姓名：</span><span>{{baseInfo.name}}</span></p>
    <p><span>年龄：</span><span>{{baseInfo.age}}</span></p>

    <button @click="editUser">EDIT</button>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        user: {}
      }
    },
    methods: {
      goUser() {
        this.$router.push('/user')
      },
      editUser() {
        this.$store.commit('user/setBaseinfo', {name: 'xx', age: 25})
      }
    },
    computed: {
      ...mapGetters({
        baseInfo: 'user/getBaseinfo'
      })
    },
    mounted() {
      this.$store.dispatch('user/getUser')
    }
  }
</script>

<style lang="scss">
  .user-wrapper {
    padding: 20px;
  }
</style>