<template>
  <div v-if="todos">
    <ul >
      <li v-for="(item, i) in todos" :key="i">
        <!-- {{item.text}} -->
        <slot name="todo" :todo="item">
          {{item.text}}
        </slot>
      </li>
    </ul>
    <!-- <h1>{{todos[0]}}</h1> -->
  </div>
</template>

<script>
  export default {
    props: {
      todos: {
        type: Array,
        default: () => null
      }
    }
  }
</script>