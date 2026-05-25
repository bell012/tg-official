<template>
  <div class="about-page relative min-h-screen overflow-x-hidden text-white">
    <ServePageBackground />
    <div class="relative z-[1]">
      <div class="hidden md:block">
        <AboutPc />
      </div>
      <div class="md:hidden">
        <AboutH5 />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServePageBackground from "@/views/serve/ServePageBackground.vue";
import AboutH5 from "./h5.vue";
import AboutPc from "./pc.vue";
</script>

<style scoped lang="scss"></style>
