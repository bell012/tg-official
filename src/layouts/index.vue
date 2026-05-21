<script setup lang="ts">
import TopNav from "@/layouts/TopNav.vue";
import Footer from "@/layouts/Footer.vue";
</script>

<template>
  <div class="relative bg-white md:pb-[200px]">
    <TopNav />
    <main class="relative z-10 bg-white pt-[56px] md:pt-[72px]">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>
