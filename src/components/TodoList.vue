<template>
  <div >
    <div class="border-2 p-2 text-3xl underline">
    {{title}}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: ['title'],
  methods: {
    test2(){
      this.$emit('edit-item')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
