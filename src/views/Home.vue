<template>
  <form @submit.prevent="addTask" class="w-full h-full">
    <input
      type="text"
      v-model.lazy="newTask"
      placeholder="New task"
      class="border-2 p-2 m-2 border-black w-[50%]"
    />
    <button
      type="submit"
      @submit.prevent=""
      class="border bg-green-300 h-[10vh] w-32 rounded text-2xl p-2 m-2"
    >
      Submit
    </button>
  </form>
  <div class="p-6 md:flex justify-evenly h-screen">
    <TodoList
      class="rounded border-4 p-4 h-[30vh] my-2 overflow-auto border-gray-700 md:w-1/4 md:h-[80vh]"
      title="Todo"
    >
      <draggable
        class="list-group"
        :list="todo"
        group="todoapp"
        ghostClass="on-drag"
        animation="600"
      >
        <TodoItem
          v-for="(task, index) in todo"
          :key="task.name"
          :item="todo"
          @edit-item="edit(index, 'todo')"
          @del-item="del(index, 'todo')"
        >
          {{ task.name }}
          <template #icon> </template>
        </TodoItem>
      </draggable>
    </TodoList>
    <TodoList
      class="rounded border-4 p-4 h-[30vh] my-2 border-yellow-700 md:w-1/4 md:h-[80vh]"
      title="Progress"
    >
      <draggable
        class="list-group"
        :list="Progress"
        group="todoapp"
        ghostClass="on-drag"
        animation="600"
      >
        <TodoItem
          v-for="(task, index) in Progress"
          :key="index"
          :item="Progress"
          @edit-item="edit(index, 'Progress')"
          @del-item="del(index, 'Progress')"
        >
          {{ task.name }}

          <template #icon> </template>
        </TodoItem>
      </draggable>
    </TodoList>
    <TodoList
      class="rounded border-4 p-4 h-[30vh] border-green-700 md:w-1/4 md:h-[80vh]"
      title="Completed"
    >
      <draggable
        class="list-group"
        :list="Completed"
        group="todoapp"
        ghostClass="on-drag"
        animation="600"
      >
        <TodoItem
          v-for="(task, index) in Completed"
          :key="index"
          :item="Completed"
          @edit-item="edit(index, 'Completed')"
          @del-item="del(index, 'Completed')"
        >
          {{ task.name }}

          <template #icon> </template>
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
      option: "",
      editableTask: null,
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
      if (this.newTask && this.editableTask == null) {
        this.todo.unshift({ name: this.newTask });
        this.newTask = "";
      } else {
        if (this.option == "todo") {
          this.todo[this.editableTask].name = this.newTask;
          this.editableTask = null;
        } else if (this.option == "Progress") {
          this.Progress[this.editableTask].name = this.newTask;
          this.editableTask = null;
        } else {
          this.Completed[this.editableTask].name = this.newTask;
          this.editableTask = null;
        }
      }
    },
    edit(index, item) {
      if (item == "todo") {
        this.option = "todo";
        this.newTask = this.todo[index].name;
      } else if (item == "Progress") {
        this.option = "Progress";
        this.newTask = this.Progress[index].name;
      } else {
        this.option = "Completed";
        this.newTask = this.Completed[index].name;
      }
      this.editableTask = index;
    },
    del(index,item){
      console.log(index,item)
      this.option = item
      if(this.option == 'todo'){
        this.todo.splice(index,1)
      }else if(this.option == 'Progress'){
        this.Progress.splice(index,1)
      }else
      {
        this.Completed.splice(index,1)
      }
    }
  },
};
</script>
