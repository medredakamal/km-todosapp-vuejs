<template>
  <div
    class="about max-w-lg m-auto"
    v-motion
    :initial="{
      opacity: 0,
    }"
    :enter="{
      opacity: 1,
    }"
  >
    <p class="mb-3 text-center">
      This app is created by
      <a
        class="text-vuejs hover:text-purple-700 hover:underline transition-all"
        target="_blank"
        href="https://medredakamal.dev"
        title="View Portfolio"
        >Med Reda Kamal</a
      >
      using <span class="text-vuejs">VueJS</span> <br />
      Senior Full Stack Web Developer, helped many companies, businesses to grow
      online, designed & developed many Web & Mobile applications.
    </p>
    <h2
      class="
        flex
        align-items-center
        justify-center
        bg-purple-700
        text-white
        mb-2
        py-1
        rounded
        font-bold
      "
    >
      Packages Used
    </h2>
    <ul>
      <li class="flex items-center">
        <span class="mr-1 text-xs text-purple-700"
          ><font-awesome-icon icon="fa-solid fa-circle" /></span
        >Axios
      </li>
      <li class="flex items-center">
        <span class="mr-1 text-xs text-purple-700"
          ><font-awesome-icon icon="fa-solid fa-circle" /></span
        >Font Awesome (Vue Version)
      </li>
      <li class="flex items-center">
        <span class="mr-1 text-xs text-purple-700"
          ><font-awesome-icon icon="fa-solid fa-circle" /></span
        >TailwindCSS
      </li>
      <li class="flex items-center">
        <span class="mr-1 text-xs text-purple-700"
          ><font-awesome-icon icon="fa-solid fa-circle" /></span
        >PostCSS
      </li>
      <li class="flex items-center">
        <span class="mr-1 text-xs text-purple-700"
          ><font-awesome-icon icon="fa-solid fa-circle" /></span
        >Vue Meta
      </li>
      <li class="flex items-center">
        <span class="mr-1 text-xs text-purple-700"
          ><font-awesome-icon icon="fa-solid fa-circle" /></span
        >Vue Router
      </li>
      <li class="flex items-center">
        <span class="mr-1 text-xs text-purple-700"
          ><font-awesome-icon icon="fa-solid fa-circle" /></span
        >JSON Place Holder (API)
      </li>
    </ul>
    <p class="flex-1">
      Note : Changed from API to a local data, because JSON Place Holder have a
      problem on item ids.
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
  metaInfo: {
    title: "About",
    titleTemplate: "KMTodos | %s",
  },
};
</script>