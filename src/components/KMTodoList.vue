<template>
  <div class="my-4">
    <hr class="mb-3 px-3" />

    <div class="km__todolist w-screen max-w-lg m-auto" v-if="todos.length > 0">
      <div
        class="km__todolist__items"
        v-for="todo in todos"
        v-bind:key="todo.id"
      >
        <KMTodoItem
          v-bind:todo="todo"
          v-on:km-remove-todo="$emit('km-remove-todo', todo.id)"
        />
      </div>
    </div>

    <div class="km__todolist w-screen max-w-lg m-auto" v-else>
      <h1 class="text-center font-bold">No Todos</h1>
      <p class="text-center">What is your plan today ?</p>
    </div>
  </div>
</template>

<script>
import KMTodoItem from "./KMTodoItem";
export default {
  name: "KMTodoList",
  components: {
    KMTodoItem,
  },
  props: ["todos"],
};
</script>

<style scoped>
</style>