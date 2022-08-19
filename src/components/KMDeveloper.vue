<template>
  <div class="my-4 fixed bottom-0 left-4 right-4 w-100 m-auto">
    <div class="bg-gradient-to-br from-gray-700 to-blue-900 py-2 px-4 rounded">
      <div class="flex items-center mb-1">
        <img
          src="https://medredakamal.dev/mk-profile.png"
          class="object-contain rounded-full border-2 mr-1"
          height="35"
          width="35"
          alt="Med Reda Kamal"
        />
        <span class="text-white font-bold">Med Reda Kamal</span>
      </div>
      <div class="flex items-center">
        <a href="https://github.com/medredakamal" target="_blank"
          ><span
            class="
              text-lg text-white
              rounded-full
              mr-2
              px-1
              hover:text-blue-900 hover:bg-white
              transition-all
            "
            ><font-awesome-icon icon="fa-brands fa-github" /></span
        ></a>
        <a href="https://linkedin.com/in/medredakamal" target="_blank"
          ><span
            class="
              text-lg text-white
              rounded-full
              mr-2
              px-1
              hover:text-blue-900 hover:bg-white
              transition-all
            "
            ><font-awesome-icon icon="fa-brands fa-linkedin" /></span
        ></a>
        <a href="mailto:medkalgeveloper.com" target="_blank"
          ><span
            class="
              text-lg text-white
              rounded-full
              mr-2
              px-1
              hover:text-blue-900 hover:bg-white
              transition-all
            "
            ><font-awesome-icon icon="fa-solid fa-envelope" /></span
        ></a>
        <a
          href="https://medredakamal.dev"
          target="_blank"
          class="
            px-2
            py-1
            mr-2
            rounded
            bg-transparent
            border-white
            text-white
            border
            hover:bg-white hover:text-blue-900
            transition-all
          "
          style="font-size: 13px"
          >View Portfolio</a
        >
        <a
          href="https://github.com/medredakamal/km-todosapp-vuejs"
          target="_blank"
          class="
            px-2
            py-1
            rounded
            bg-transparent
            border-white
            text-white
            border
            hover:bg-white hover:text-blue-900
            transition-all
          "
          style="font-size: 13px"
          >Source Code</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KMDeveloper",
};
</script>

<style scoped>
</style>