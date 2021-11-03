<template>
  <div class="main">
    <demo-block>
      <template #source>
        <input type="text" />
      </template>
      <template #description>input is the xxx</template>
      <template #highlight>
        <pre v-pre>
          <code class="html">&lt;el-input v-model=&quot;input&quot; placeholder=&quot;请输入内容&quot;&gt;&lt;/el-input&gt;
            &lt;script&gt;
            export default {
              data() {
                return {
                  input: ''
                }
              }
            }
            &lt;/script&gt;
          </code>
        </pre>
      </template>
    </demo-block>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import DemoBlock from 'com/DemoBlock.vue'

export default defineComponent({
  components: { DemoBlock },
  setup() {
    console.log('xx')
  }
})
</script>

<style lang="scss">
@import './public/scss/reset.scss';
.main {
  width: 800px;
  position: relative;
  top: 50px;
  left: 50px;
}
</style>
