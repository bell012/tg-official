<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import TopNav from "@/layouts/TopNav.vue";
import Footer from "@/layouts/Footer.vue";

const route = useRoute();

const isDarkPage = computed(
  () =>
    ["/serve", "/about", "/connect"].includes(route.path) ||
    route.path === "/consult" ||
    route.path.startsWith("/consult/")
);

const mainBgClass = computed(() => {
  if (!isDarkPage.value) return "bg-white";
  if (
    route.path === "/serve" ||
    route.path === "/consult" ||
    route.path.startsWith("/consult/")
  ) {
    return "bg-transparent";
  }
  return "bg-[#0d0c14]";
});
</script>

<template>
  <div
    class="relative md:pb-[200px]"
    :class="isDarkPage ? 'bg-[#0d0c14]' : 'bg-white'"
  >
    <TopNav />
    <main class="relative z-10 pt-[56px] md:pt-[72px]" :class="mainBgClass">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>
