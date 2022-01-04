<template>
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
        { name: "code sign up page" },
        { name: "test dashboard" },
        { name: "style registration" },
        { name: "help with design" },
      ],

      Progress: [],
      Completed: [],
    };
  },
  methods: {
    add() {
      if (this.newTask) {
        this.arrBacklog.push({ name: this.newTask });
        this.newTask = "";
      }
    },
  },
};
</script>
