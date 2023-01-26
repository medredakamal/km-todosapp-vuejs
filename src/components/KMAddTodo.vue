<template>
  <div class="km__add__todo mb-4 px-3">
    <form @submit="newTodo" class="flex align-items-center justify-center">
      <input
        class="
          mr-2
          border-2
          py-2
          px-3
          rounded
          focus:outline-none focus:border-purple-700
          w-full
          max-w-md
          m-auto
        "
        type="text"
        v-model="title"
        name="title"
        placeholder="Add new todo"
      />
      <button
        type="submit"
        class="rounded px-3 bg-purple-700 text-white transition-all"
      >
        Add
      </button>
    </form>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
export default {
  name: "KMAddTodo",
  props: ["todo"],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    newTodo(e) {
      e.preventDefault();
      const newTodoData = {
        id: uuid(),
        title: this.title,
      };
      this.$emit("km-add-todo", newTodoData);
      this.title = "";
    },
  },
};
</script>

<style scoped>
</style>