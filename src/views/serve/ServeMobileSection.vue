<template>
  <section class="relative px-4">
    <div class="relative min-h-[640px] overflow-hidden rounded-[24px] md:min-h-[700px]">
      <ServeSectionCardBg class="!rounded-[24px]" />

      <div class="relative z-10 px-5 pb-3 pt-6">
        <ServeSectionHeading
          :no="section.no"
          :title="section.title"
          :subtitle="section.subtitle"
          size="sm"
        />
      </div>

      <p class="relative z-10 px-5 text-[15px] leading-7 text-[#c2c2c2]">
        {{ section.description }}
      </p>

      <div class="relative z-10 mt-4 px-2 pb-2">
        <template v-if="section.couponVisual">
          <img
            :src="section.couponVisual.cornerLeft"
            alt=""
            aria-hidden="true"
            class="pointer-events-none absolute bottom-2 left-2 z-[1] h-20 w-auto max-w-[50%] object-contain object-left-bottom"
          />
          <div class="relative mx-auto h-[300px] max-w-[360px]">
            <ServeCouponPhones />
          </div>
        </template>
        <img
          v-else
          :src="section.image"
          :alt="section.imageAlt"
          class="mx-auto max-h-[320px] w-full object-contain object-bottom"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ServeCouponPhones from "./ServeCouponPhones.vue";
import ServeSectionCardBg from "./ServeSectionCardBg.vue";
import ServeSectionHeading from "./ServeSectionHeading.vue";
import type { ServeSection } from "./sections";

defineProps<{ section: ServeSection }>();
</script>
