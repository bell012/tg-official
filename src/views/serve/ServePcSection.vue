<template>
  <section class="relative mx-auto w-full max-w-[1440px] px-6 lg:px-0">
    <!-- 票券活动：Figma 84:714 -->
    <div
      v-if="section.couponVisual"
      class="relative h-[520px] overflow-hidden rounded-[30px] md:h-[568px]"
    >
      <ServeSectionCardBg />

      <!-- 左下角装饰 84:767 -->
      <img
        :src="section.couponVisual.cornerLeft"
        alt=""
        aria-hidden="true"
        class="pointer-events-none absolute bottom-0 left-0 z-[2] h-[32.2%] w-[29.17%] max-w-[420px] object-contain object-left-bottom"
      />

      <!-- 三端手机 84:720 -->
      <div
        class="absolute right-0 top-px z-[3] h-[99.65%] w-[48.19%] max-w-[694px]"
      >
        <ServeCouponPhones />
      </div>

      <!-- 小标题 84:718 @ (60,121) -->
      <div class="absolute left-[60px] top-[121px] z-10">
        <ServeSectionHeading
          :no="section.no"
          :title="section.title"
          :subtitle="section.subtitle"
        />
      </div>

      <!-- 描述 84:717 @ (70,223) -->
      <p
        class="absolute left-[70px] top-[223px] z-10 max-w-[576px] text-lg leading-[1.67] text-[#c2c2c2]"
      >
        {{ section.description }}
      </p>
    </div>

    <!-- 其他模块 -->
    <div
      v-else
      class="relative h-[520px] overflow-hidden rounded-[30px] md:h-[568px]"
    >
      <ServeSectionCardBg />

      <div
        class="absolute bottom-0 top-0 z-[3] flex items-end justify-center"
        :class="
          section.imageOnLeft
            ? 'left-0 w-[52%] pr-4'
            : 'right-0 w-[52%] pl-4'
        "
      >
        <img
          :src="section.image"
          :alt="section.imageAlt"
          class="max-h-[96%] w-full object-contain object-bottom"
          :class="section.imageOnLeft ? 'object-left-bottom' : 'object-right-bottom'"
        />
      </div>

      <div
        class="absolute top-0 z-10 flex h-full flex-col justify-center px-6 md:px-[60px]"
        :class="section.imageOnLeft ? 'right-0 w-[48%]' : 'left-0 w-[48%]'"
      >
        <ServeSectionHeading
          :no="section.no"
          :title="section.title"
          :subtitle="section.subtitle"
        />
        <p class="mt-6 max-w-[576px] text-lg leading-[1.67] text-[#c2c2c2]">
          {{ section.description }}
        </p>
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
