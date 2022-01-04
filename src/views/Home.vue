<template>

  <form @submit.prevent="addTask" class="w-full h-full">
    <input type="text" v-model.lazy="newTask" placeholder="New task" class="border-2 p-2 m-2 border-black w-[50%]">
    <button type="submit" @submit.prevent="" class="border bg-green-300 h-[10vh] w-32 rounded text-2xl p-2 m-2">Submit</button>
  </form>

  <div class="p-6  md:flex justify-evenly h-screen">
    <TodoList
      class="rounded border-4 p-4 h-[30vh] my-2 overflow-auto border-gray-700 md:w-1/4 md:h-[80vh] "
      title="Todo"

      
    >
      <draggable
        class="list-group"
        :list="todo"
        group="todoapp"
        ghostClass="on-drag"
        animation="600"
      >
        <TodoItem v-for="task in todo" :key="task.name" :item="todo">
          {{ task.name }}
        </TodoItem>
      </draggable>
    </TodoList>
    <TodoList
      class="rounded border-4 p-4 h-[30vh] my-2 border-yellow-700 md:w-1/4 md:h-[80vh] "
      title="Progress"
    >
      <draggable
        class="list-group"
        :list="Progress"
        group="todoapp"
        ghostClass="on-drag"
        animation="600"
      >
        <TodoItem v-for="task in Progress" :key="task.name" :item="Progress">
          {{ task.name }}
        </TodoItem>
      </draggable>
    </TodoList>
    <TodoList class="rounded border-4 p-4 h-[30vh] border-green-700 md:w-1/4 md:h-[80vh]"
    
      title="Completed"
    >
      <draggable
        class="list-group"
        :list="Completed"
        group="todoapp"
        ghostClass="on-drag"
        animation="600"
      >
        <TodoItem v-for="task in Completed" :key="task.name" :item="Completed">
          {{ task.name }}
        </TodoItem>
      </draggable>
    </TodoList>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from "@/components/TodoList.vue";
import TodoItem from "@/components/TodoItem.vue";
import { VueDraggableNext } from "vue-draggable-next";

export default {
  name: "Home",
  components: {
    TodoList,
    TodoItem,
    draggable: VueDraggableNext,
  },
  data() {
    return {
      newTask: "",
      todo: [
        { name: "makan nasi" },
        { name: "bagi makan ayam" },
        { name: "tengok bulan" },
        { name: "lompat katak" },
      ],

      Progress: [],
      Completed: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.todo.unshift({ name: this.newTask });
        this.newTask = "";
      }
    },
  },
};
</script>
