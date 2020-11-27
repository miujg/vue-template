<template>
  <div class="user-wrapper">
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
  
</style>