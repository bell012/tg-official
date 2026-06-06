<template>
  <div
    ref="el"
    class="motion-reveal"
    :class="{ 'is-revealed': isRevealed }"
  >
    <div class="motion-reveal__inner" :style="delayStyle">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useScrollReveal } from "@/composables/useScrollReveal";

const props = withDefaults(
  defineProps<{
    staggerIndex?: number;
    staggerStep?: number;
  }>(),
  {
    staggerIndex: 0,
    staggerStep: 0.15,
  }
);

const el = ref<HTMLElement | null>(null);
const { isRevealed } = useScrollReveal(el);

const delayStyle = computed(() => ({
  transitionDelay: `${props.staggerIndex * props.staggerStep}s`,
}));
</script>
