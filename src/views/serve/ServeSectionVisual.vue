<template>
  <!-- Figma 左边/右边素材容器 694×567 -->
  <div
    class="serve-section-visual absolute top-px z-[3] h-[99.65%] w-[48.19%] max-w-[694px] overflow-hidden"
    :class="side === 'left' ? 'left-0' : 'right-0'"
  >
    <!-- Figma 82:1347：mask 作用于整区 694×568，仅渐隐人物图底部 -->
    <div
      class="serve-section-visual__stage absolute inset-0"
      :class="{ 'serve-section-visual__stage--masked': useFadeMask }"
    >
      <img
        :src="image"
        :alt="alt"
        class="pointer-events-none absolute object-contain"
        :style="imageStyle"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    side: "left" | "right";
    image: string;
    alt: string;
    frame?: { left: number; top: number; width: number; height: number };
    fadeBottom?: boolean;
    flipHorizontal?: boolean;
  }>(),
  { fadeBottom: undefined, flipHorizontal: false }
);

const useFadeMask = computed(
  () => props.fadeBottom ?? props.side === "left"
);

const imageStyle = computed(() => {
  if (!props.frame) {
    const style: Record<string, string> = {
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      objectPosition: props.side === "left" ? "left bottom" : "right bottom",
    };
    if (props.flipHorizontal) {
      style.transform = "scaleX(-1)";
      style.transformOrigin = "center center";
    }
    return style;
  }
  const { left, top, width, height } = props.frame;
  const style: Record<string, string> = {
    left: `${(left / 694) * 100}%`,
    top: `${(top / 567) * 100}%`,
    width: `${(width / 694) * 100}%`,
    height: `${(height / 567) * 100}%`,
    objectPosition: "left bottom",
  };
  if (props.flipHorizontal) {
    style.transform = "scaleX(-1)";
    style.transformOrigin = "center center";
  }
  return style;
});
</script>

<style scoped lang="scss">
/* Figma 82:1347 — 渐隐按配图区 694×567，非按人物图高度 */
.serve-section-visual__stage--masked {
  mask-image: linear-gradient(180deg, #fff 41%, transparent 100%);
  -webkit-mask-image: linear-gradient(180deg, #fff 41%, transparent 100%);
  mask-size: 100% 100%;
  -webkit-mask-size: 100% 100%;
}
</style>
