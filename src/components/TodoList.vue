<template>
  <div >
    <div class="border border-2 p-2 text-3xl underline">

    {{title}}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: ['title'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
