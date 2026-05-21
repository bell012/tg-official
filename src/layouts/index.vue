<script setup lang="ts">
import TopNav from "@/layouts/TopNav.vue";
import Footer from "@/layouts/Footer.vue";
</script>

<template>
  <div class="flex min-h-screen flex-col bg-white">
    <TopNav />
    <main class="flex-1 pt-[56px] md:pt-[72px]">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>
