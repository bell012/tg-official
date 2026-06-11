<template>
  <section class="relative mx-auto w-full max-w-[1440px] px-6 lg:px-0">
    <RevealGroup>
      <!-- 票券活动：Figma 84:714 -->
      <div
        v-if="section.couponVisual"
        class="relative h-[520px] overflow-hidden rounded-[30px] lg:h-[568px]"
      >
        <ServeSectionCardBg />

        <img
          :src="section.couponVisual.cornerLeft"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute bottom-0 left-0 z-[2] h-[32.2%] w-[29.17%] max-w-[420px] object-contain object-left-bottom"
        />

        <div
          class="absolute right-0 top-px z-[3] h-[99.65%] w-[48.19%] max-w-[694px]"
        >
          <ServeCouponPhones :phones="section.couponVisual.phones" />
        </div>

        <div
          class="absolute z-10"
          :style="{
            left: `${section.layout.heading.left}px`,
            top: `${section.layout.heading.top}px`,
          }"
        >
          <ServeSectionHeading
            :no="section.no"
            :title="section.title"
            :subtitle="section.subtitle"
            :heading-image="section.headingImage"
          />
        </div>

        <p
          class="absolute z-10 max-w-[576px] text-lg leading-[1.67] text-[#c2c2c2]"
          :style="{
            left: `${section.layout.description.left}px`,
            top: `${section.layout.description.top}px`,
          }"
        >
          {{ section.description }}
        </p>
      </div>

      <!-- 其他模块 -->
      <div
        v-else
        class="relative h-[520px] overflow-hidden rounded-[30px] lg:h-[568px]"
      >
        <ServeSectionCardBg />

        <!-- Figma 82:1347 底部融色：整卡宽度，避免仅左侧 48% 叠层造成中线色差 -->
        <div
          v-if="
            section.layout.visual.side === 'left' && section.layout.visual.image
          "
          class="serve-section-bottom-fade pointer-events-none absolute inset-0 z-[2] rounded-[30px]"
          aria-hidden="true"
        />

        <ServeSectionVisual
          v-if="section.layout.visual.image"
          :side="section.layout.visual.side"
          :image="section.layout.visual.image"
          :alt="section.imageAlt"
          :frame="section.layout.visual.frame"
          :fade-bottom="section.layout.visual.fadeBottom"
          :flip-horizontal="section.layout.visual.flipHorizontal"
        />

        <img
          v-if="section.layout.decor"
          :src="section.layout.decor.image"
          alt=""
          aria-hidden="true"
          class="pointer-events-none absolute bottom-0 z-[2] h-[32.2%] w-[29.17%] max-w-[420px] object-contain object-bottom"
          :class="
            section.layout.decor.position === 'br'
              ? 'right-0 object-right-bottom'
              : 'left-0 object-left-bottom'
          "
        />

        <div
          class="absolute z-10"
          :style="{
            left: `${section.layout.heading.left}px`,
            top: `${section.layout.heading.top}px`,
          }"
        >
          <ServeSectionHeading
            :no="section.no"
            :title="section.title"
            :subtitle="section.subtitle"
            :heading-image="section.headingImage"
          />
        </div>

        <p
          class="absolute z-10 max-w-[576px] text-lg leading-[1.67] text-[#c2c2c2]"
          :style="{
            left: `${section.layout.description.left}px`,
            top: `${section.layout.description.top}px`,
          }"
        >
          {{ section.description }}
        </p>
      </div>
    </RevealGroup>
  </section>
</template>

<script setup lang="ts">
import RevealGroup from "@/components/RevealGroup.vue";

import ServeCouponPhones from "./ServeCouponPhones.vue";
import ServeSectionCardBg from "./ServeSectionCardBg.vue";
import ServeSectionHeading from "./ServeSectionHeading.vue";
import ServeSectionVisual from "./ServeSectionVisual.vue";
import type { ServeSection } from "./sections";

defineProps<{ section: ServeSection }>();
</script>

<style scoped lang="scss">
/* 与 Figma Rectangle 6 同比例，铺满 1440 卡宽 */
.serve-section-bottom-fade {
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 41%,
    rgba(26, 25, 33, 0.25) 70%,
    rgba(26, 25, 33, 0.7) 100%
  );
}
</style>
