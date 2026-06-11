<template>
  <div ref="el" class="reveal-group" :class="{ 'is-revealed': isRevealed }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

const el = ref<HTMLElement | null>(null);
// 滚动到元素进入视口上半区再触发
const { isRevealed } = useScrollReveal(el, {
  threshold: 0,
  rootMargin: "0px 0px -50% 0px",
});
</script>

<style scoped lang="scss">
.reveal-group {
  width: 100%;
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 400ms ease, transform 400ms ease;
  will-change: opacity, transform;
}

.reveal-group.is-revealed {
  opacity: 1;
  transform: none;
  will-change: auto;
}

@media (prefers-reduced-motion: reduce) {
  .reveal-group {
    opacity: 1;
    transform: none;
    transition: none;
    will-change: auto;
  }
}
</style>
