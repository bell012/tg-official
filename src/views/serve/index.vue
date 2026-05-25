<template>
  <div class="serve-page relative min-h-screen overflow-x-hidden text-white">
    <ServePageBackground />
    <div class="relative z-[1]">
      <!-- PC -->
      <div class="hidden lg:block">
        <ServeHero :intro="serveIntro" />
        <div class="relative mx-auto flex max-w-[1440px] flex-col gap-[120px] px-8 pb-24">
          <ServePcSection
            v-for="item in serveSections"
            :key="item.no"
            :section="item"
          />
        </div>
      </div>

      <!-- H5 — Figma 177:3067 Frame 63：Hero + 8 模块，gap 90 -->
      <div class="serve-h5-layout lg:!hidden">
        <ServeHero :intro="serveIntro" />
        <ServeMobileSection
          v-for="item in serveSections"
          :key="`m-${item.no}`"
          :section="item"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ServeHero from "./ServeHero.vue";
import ServeMobileSection from "./ServeMobileSection.vue";
import ServePageBackground from "./ServePageBackground.vue";
import ServePcSection from "./ServePcSection.vue";
import { serveIntro, serveSections } from "./sections";
</script>

<style scoped lang="scss">
@use "./serve-h5" as *;

.serve-h5-layout {
  display: flex;
  flex-direction: column;
  gap: h5(90);
  width: 100%;
  padding: h5(60) h5(42) h5(60);
}
</style>
