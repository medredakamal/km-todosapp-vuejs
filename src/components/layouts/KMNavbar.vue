<template>
  <header class="km__header">
    <h1 class="text-center w-100 my-4 text-2xl mb-5">
      Welcome to
      <span class="underline font-bold text-purple-700">KMTodos v1.00</span>
    </h1>
    <div id="km__nav" class="w-100 flex align-items-center justify-center mb-4">
      <router-link
        class="
          border-2 border-purple-700
          rounded
          py-1
          px-4
          mr-3
          hover:bg-purple-700 hover:text-white
          transition-all
        "
        to="/"
        v-bind:class="{ 'bg-purple-700 text-white': getRouteName == 'todos' }"
      >
        Todos
      </router-link>
      <router-link
        class="
          border-2 border-purple-700
          rounded
          py-1
          px-4
          mr-3
          hover:bg-purple-700 hover:text-white
          transition-all
        "
        to="/about"
        v-bind:class="{ 'bg-purple-700 text-white': getRouteName == 'about' }"
      >
        About
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "KMNavbar",
  computed: {
    getRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
</style>