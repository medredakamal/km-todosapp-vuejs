<template>
  <div id="app" class="relative pb-20">
    <KMNavbar />
    <div class="km__main flex flex-column justify-center my-5">
      <router-view></router-view>
    </div>
    <KMDeveloper />
  </div>
</template>

<script>
import KMNavbar from "@/components/layouts/KMNavbar";
import KMDeveloper from "@/components/KMDeveloper";

export default {
  name: "app",
  components: {
    KMNavbar,
    KMDeveloper,
  },
};
</script>

<style>
</style>
