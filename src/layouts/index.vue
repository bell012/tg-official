<template>
  <div
    class="relative lg:pb-[590px]"
    :class="isDarkPage ? 'bg-[#0d0c14]' : ''"
  >
    <TopNav />
    <main class="relative z-10 pt-[40px] lg:pt-[110px]" :class="mainBgClass">
      <router-view />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import TopNav from "@/layouts/TopNav.vue";
import Footer from "@/layouts/Footer.vue";

const route = useRoute();

const isDarkPage = computed(
  () =>
    route.path === "/" ||
    ["/serve", "/about", "/connect", "/search"].includes(route.path) ||
    route.path === "/consult" ||
    route.path.startsWith("/consult/")
);

const mainBgClass = computed(() => {
  if (!isDarkPage.value) return "bg-white";
  if (
    route.path === "/serve" ||
    route.path === "/consult" ||
    route.path === "/search" ||
    route.path.startsWith("/consult/")
  ) {
    return "bg-transparent";
  }
  return "bg-[#0d0c14]";
});
</script>
<style scoped lang="scss"></style>
