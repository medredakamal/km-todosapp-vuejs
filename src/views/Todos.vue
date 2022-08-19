<template>
  <div
    class="km__todos__page"
    v-motion
    :initial="{
      opacity: 0,
    }"
    :enter="{
      opacity: 1,
    }"
  >
    <KMAddTodo v-on:km-add-todo="newTodo" />
    <KMTodoList v-bind:todos="todos" v-on:km-remove-todo="removeTodo" />
  </div>
</template>

<script>
import KMAddTodo from "@/components/KMAddTodo";
import KMTodoList from "@/components/KMTodoList";

export default {
  name: "Todos",
  components: {
    KMAddTodo,
    KMTodoList,
  },
  metaInfo: {
    title: "Todos",
    titleTemplate: "KMTodos | %s",
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    removeTodo(id) {
      setTimeout(() => {
        this.todos = this.todos.filter((todoItem) => {
          return todoItem.id !== id;
        });
      }, 1000);
    },
    newTodo(newTodoData) {
      this.todos = [...this.todos, newTodoData];
    },
  },
};
</script>

<style scoped>
</style>