<template>
  <div>
    <h1>xxx</h1>
    <test />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import {
//   openBlock as _openBlock,
//   createElementBlock as _createElementBlock
// } from 'vue'
import './test.md'
export default defineComponent({
  components: {
    // 'element-demo11': (function () {
    //   function render() {
    //     return _openBlock(), _createElementBlock('h1', null, 'jgmiu')
    //   }
    //   return {
    //     render
    //   }
    // })()
  },
  setup() {
    console.log('xxx')
  }
})
</script>
