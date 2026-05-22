<script setup lang="ts">
import TopNav from "@/layouts/TopNav.vue";
import Footer from "@/layouts/Footer.vue";
</script>

<template>
  <div class="relative bg-[#0D0C14] md:pb-[200px]">
    <TopNav />
    <main class="relative z-10 bg-[#0D0C14] pt-[40px] md:pt-[110px]">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped lang="scss"></style>
