<template>
  <div class="serve-page relative min-h-screen overflow-hidden text-white">
    <ServePageBackground />

    <div class="relative z-[1]">
      <!-- PC -->
      <div class="hidden md:block">
        <ServeHero :intro="serveIntro" />

        <div class="relative mx-auto flex max-w-[1440px] flex-col gap-[120px] px-8 pb-24">
          <ServePcSection
            v-for="item in serveSections"
            :key="item.no"
            :section="item"
          />
        </div>
      </div>

      <!-- H5 -->
      <div class="block md:hidden">
        <ServeHero :intro="serveIntro" />

        <div class="relative flex flex-col gap-[90px] px-4 pb-16">
          <ServeMobileSection
            v-for="item in serveSections"
            :key="`m-${item.no}`"
            :section="item"
          />
        </div>
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

<style scoped lang="scss"></style>
