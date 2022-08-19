<template>
  <div
    class="km__todo__item flex items-center mb-1 px-4"
    v-bind:class="{ km__is__completed: todo.completed }"
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :enter="{
      opacity: 1,
      y: 0,
    }"
  >
    <input
      class="mr-2"
      type="checkbox"
      v-on:change="markTodoCompleted"
      v-bind:checked="todo.completed"
    />
    <p class="flex-1 mr-4 text-md">{{ todo.title }}</p>
    <button
      @click="$emit('km-remove-todo', todo.id)"
      class="
        border border-transparent
        bg-purple-600
        rounded
        py-1
        px-2
        text-white
        hover:bg-transparent hover:text-purple-600 hover:border-purple-600
        transition-all
      "
    >
      <font-awesome-icon icon="fa-solid fa-trash-alt" />
    </button>
  </div>
</template>

<script>
import { useMotion } from "@vueuse/motion";
export default {
  name: "KMTodoItem",
  props: ["todo"],
  methods: {
    markTodoCompleted() {
      this.todo.completed = !this.todo.completed;
    },
  },
  created() {
    this.$on("km-remove-todo", () => {
      let target = this.$el;
      useMotion(target, {
        initial: {
          opacity: 1,
        },
        enter: {
          opacity: 0,
        },
      });
    });
  },
};
</script>

<style scoped>
.km__is__completed {
  text-decoration: line-through;
}
</style>