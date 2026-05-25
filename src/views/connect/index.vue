<template>
  <div class="connect-page relative min-h-screen overflow-x-hidden text-white">
    <ServePageBackground />
    <div class="relative z-[1]">
      <div class="hidden md:block">
        <ConnectPc />
      </div>
      <div class="md:hidden">
        <ConnectH5 />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServePageBackground from "@/views/serve/ServePageBackground.vue";
import ConnectH5 from "./h5.vue";
import ConnectPc from "./pc.vue";
</script>

<style scoped lang="scss"></style>
