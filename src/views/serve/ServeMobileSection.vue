<template>
  <section class="serve-mobile-section">
    <template v-if="isCouponSection">
      <RevealGroup
        class="serve-mobile-section__frame serve-mobile-section__frame--coupon serve-mobile-section__frame--stagger"
        :animate-self="false"
      >
        <div class="serve-mobile-section__card">
          <ServeSectionCardBg class="!rounded-[30px]" />
        </div>

        <div class="serve-mobile-section__content">
          <div
            class="serve-mobile-section__copy serve-mobile-section__stagger-item"
            style="transition-delay: 200ms"
          >
            <ServeMobileHeading
              :no="section.no"
              :title="section.title"
              :subtitle="section.subtitle"
            />

            <p class="serve-mobile-section__desc">
              {{ section.description }}
            </p>
          </div>

          <div
            class="serve-mobile-section__visual serve-mobile-section__stagger-item"
            style="transition-delay: 400ms"
          >
            <img
              :src="visualSrc"
              :alt="section.imageAlt"
              class="serve-mobile-section__visual-img"
              :class="{ 'serve-mobile-section__visual-img--flip': section.layout.visual.flipHorizontal }"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </RevealGroup>
    </template>

    <RevealGroup
      v-else
      class="serve-mobile-section__frame"
      :class="
        section.couponVisual
          ? 'serve-mobile-section__frame--coupon'
          : 'serve-mobile-section__frame--default'
      "
    >
      <div class="serve-mobile-section__card">
        <ServeSectionCardBg class="!rounded-[30px]" />
      </div>

      <div class="serve-mobile-section__content">
        <ServeMobileHeading
          :no="section.no"
          :title="section.title"
          :subtitle="section.subtitle"
        />

        <p class="serve-mobile-section__desc">
          {{ section.description }}
        </p>

        <div class="serve-mobile-section__visual">
          <img
            :src="visualSrc"
            :alt="section.imageAlt"
            class="serve-mobile-section__visual-img"
            :class="{ 'serve-mobile-section__visual-img--flip': section.layout.visual.flipHorizontal }"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </RevealGroup>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import RevealGroup from "@/components/RevealGroup.vue";
import ServeMobileHeading from "./ServeMobileHeading.vue";
import ServeSectionCardBg from "./ServeSectionCardBg.vue";
import type { ServeSection } from "./sections";

const props = defineProps<{ section: ServeSection }>();

const visualSrc = computed(
  () =>
    props.section.mobileVisualImage ?? props.section.layout.visual.image
);

const isCouponSection = computed(() => Boolean(props.section.couponVisual));
</script>

<style scoped lang="scss">
@use "./serve-h5" as *;

.serve-mobile-section {
  width: 100%;
}

.serve-mobile-section__frame {
  position: relative;
  width: 100%;
}

/* Figma 181:679 背景 — 自 y:68 起 */
.serve-mobile-section__card {
  position: absolute;
  left: 0;
  right: 0;
  top: h5(68);
  bottom: 0;
  overflow: hidden;
  border-radius: h5(30);
}

.serve-mobile-section__content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.serve-mobile-section__copy {
  width: 100%;
}

.serve-mobile-section__stagger-item {
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 400ms ease, transform 400ms ease;
  will-change: opacity, transform;
}

.serve-mobile-section__frame--stagger.is-revealed .serve-mobile-section__stagger-item {
  opacity: 1;
  transform: none;
  will-change: auto;
}

/* 设计标注 @1x：副标题→文案 10px，文案→配图 25px（×3 → h5） */
.serve-mobile-section__desc {
  margin: h5(30) 0 h5(75);
  padding: 0 h5(42);
  box-sizing: border-box;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 400;
  font-size: h5(33);
  line-height: 1.67;
  text-align: center;
  color: #c2c2c2;
}

.serve-mobile-section__visual {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  overflow: hidden;
}

.serve-mobile-section__frame--default .serve-mobile-section__visual {
  height: h5(567);
}

.serve-mobile-section__frame--coupon .serve-mobile-section__visual {
  height: h5(900);
}

.serve-mobile-section__visual-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom center;
}

.serve-mobile-section__visual-img--flip {
  transform: scaleX(-1);
}
</style>
