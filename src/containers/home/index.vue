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
  @import './index.scss'
</style>