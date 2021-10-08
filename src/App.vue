<template>
  <div>
    <h1>xxx</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
interface IObj {
  name: string
  age: number
}
export default defineComponent({
  setup() {
    const obj: IObj = {
      name: 'xxx',
      age: 26
    }
    console.log(obj)
    const test = (a: string) => {
      console.log(a)
    }
    test('111')
  }
})
</script>
