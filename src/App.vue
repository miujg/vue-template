<template>
  <h1>111</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    console.log('11')
    const a = ref<number>('11')
    return {
      a
    }
  }
})
</script>
