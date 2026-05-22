<template>
  <div class="consult-detail-hero" :class="`consult-detail-hero--${variant}`">
    <img
      class="consult-detail-hero__image"
      :src="image"
      :alt="alt"
      loading="lazy"
      decoding="async"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  alt: string;
  variant: "pc" | "h5";
}>();
</script>

<style scoped lang="scss">
@use "../../serve/serve-h5" as *;

.consult-detail-hero--pc {
  width: 100%;
  aspect-ratio: 949 / 544;
  border-radius: 30px;
  overflow: hidden;

  .consult-detail-hero__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}

.consult-detail-hero--h5 {
  width: 100%;
  aspect-ratio: 1041 / 585;
  border-radius: h5(30);
  overflow: hidden;

  .consult-detail-hero__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}
</style>
