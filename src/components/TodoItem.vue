<template>
  <div class="rounded border-2 border-gray-400 p-2 mt-2 flex justify-between">
    <slot> </slot>
    <slot name="icon">
      <div class="mx-2">
        <button @click.prevent="edits">
          <i class="far fa-edit cursor-pointer hover:text-blue-400"></i>
        </button>
        |
        <button @click.prevent="dels">

        <i class="far fa-trash-alt hover:text-red-400"></i>
        </button>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  methods: {
    edits() {
      this.$emit("edit-item",true)
    },
    dels() {
      this.$emit("del-item",true)
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
