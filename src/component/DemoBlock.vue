<template>
  <div class="demo-block">
    <!-- 组件样子 -->
    <div class="source-wrapper">
      <slot name="source"></slot>
    </div>
    <!-- code -->
    <div class="code-wrapper" :class="codeClass" :style="codeStyle">
      <div ref="codeBox" class="box">
        <div class="description">
          <slot name="description">
            <p>一段注释</p>
          </slot>
        </div>
        <slot name="highlight"></slot>
      </div>
    </div>
    <div class="foot-wrapper" @click="handleClick">
      <i class="iconfont icon-xiajiantou"></i>
      <span class="tips">显示代码</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick, onMounted, watch } from 'vue'

export default defineComponent({
  setup() {
    let isOpen = ref<boolean>(false)
    let codeBoxHeight = ref(0)
    let codeBox = ref<HTMLElement>(null)
    let codeStyle = ref('')
    const handleClick = () => {
      isOpen.value = !isOpen.value
    }
    watch(isOpen, (newVal) => {
      if (newVal) {
        codeStyle.value = `height: ${codeBoxHeight.value}px`
      } else {
        codeStyle.value = 'height: 0'
      }
    })
    onMounted(() => {
      nextTick(() => {
        codeBoxHeight.value = codeBox.value.getClientRects()[0].height
      })
    })
    return {
      isOpen,
      handleClick,
      codeBox,
      codeStyle
    }
  }
})
</script>

<style lang="scss">
.demo-block {
  width: 100%;
  border: 1px solid #ebebeb;
  .source-wrapper {
    padding: 24px;
    border-bottom: 1px solid #ebebeb;
  }
  .code-wrapper {
    background: #fafafa;
    transition: all 0.5s;
    overflow: hidden;
    height: 0;
    .description {
      color: #666;
      font-size: 14px;
      background: #fff;
      padding: 10px;
      margin: 10px;
    }
  }
  .foot-wrapper {
    cursor: pointer;
    border-top: 1px solid #ebebeb;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 42px;
    i {
      color: #ebebeb;
      position: relative;
      left: 10px;
      transition: all 0.5s;
      font-size: 20px;
      margin-right: 8px;
    }
    .tips {
      opacity: 0;
      position: relative;
      left: 10px;
      transition: all 0.5s;
      color: #1989fa;
    }
    &:hover {
      .tips {
        opacity: 1;
        left: 0;
      }
      i {
        left: 0;
      }
    }
  }
}
</style>
