<template>
  <div>
    <h1>user</h1>
    <slot v-bind:user = "user"></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          name: 'jgmiu',
          add: '花卉园'
        }
      }
    }
  }
</script>
