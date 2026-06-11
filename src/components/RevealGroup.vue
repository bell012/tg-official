<template>
  <component
    :is="as"
    ref="el"
    class="reveal-group"
    :class="{ 'is-revealed': isRevealed, 'reveal-group--passive': !animateSelf }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

withDefaults(
  defineProps<{
    as?: string;
    animateSelf?: boolean;
  }>(),
  { as: "div", animateSelf: true }
);

const el = ref<HTMLElement | null>(null);
// 滚动到元素进入视口上半区再触发
const { isRevealed } = useScrollReveal(el, {
  threshold: 0,
  rootMargin: "0px 0px -50% 0px",
});
</script>

<style scoped lang="scss">
.reveal-group {
  opacity: 0;
  transform: translate3d(0, 60px, 0);
  transition: opacity 400ms ease, transform 400ms ease;
  will-change: opacity, transform;
}

.reveal-group.reveal-group--passive {
  opacity: 1;
  transform: none;
  transition: none;
  will-change: auto;
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
