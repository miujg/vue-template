<template>
  <h1>111</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    console.log('11')
    const a = ref<string>('11')
    return {
      a
    }
  }
})
</script>

<style lang="scss">
  h1 {
    box-sizing: border-box;
  }
</style>
