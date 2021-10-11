## 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 input 组件
```html
<input
  placeholder="请输入内容"
>
</input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

## xx状态

:::demo 通过-啥都没有
```html
<el-input
  placeholder="请输入内容"
  v-model="input"
  :disabled="false">
</el-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::
