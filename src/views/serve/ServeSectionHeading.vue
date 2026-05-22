<template>
  <!-- Figma 小标题实例导出图（@2x，展示高度 98px） -->
  <img
    v-if="headingImage"
    :src="headingImage"
    :alt="`${no} ${title} ${subtitle}`"
    class="block w-auto max-w-none object-contain object-left"
    :class="size === 'sm' ? 'h-[72px]' : 'h-[98px]'"
    draggable="false"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    no: string;
    title: string;
    subtitle: string;
    /** Figma 导出的完整小标题图 */
    headingImage?: string;
    size?: "sm" | "md";
  }>(),
  { size: "md" }
);
</script>
