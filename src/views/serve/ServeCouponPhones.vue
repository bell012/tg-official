<template>
  <div class="serve-coupon-phones">
    <img
      :src="phones.left"
      alt=""
      class="serve-coupon-phones__left"
      aria-hidden="true"
    />
    <img
      :src="phones.right"
      alt=""
      class="serve-coupon-phones__right"
      aria-hidden="true"
    />
    <img
      :src="phones.center"
      alt="票券活动"
      class="serve-coupon-phones__center"
    />
  </div>
</template>

<script setup lang="ts">
import type { ServeCouponVisual } from "./sections";

defineProps<{
  phones: ServeCouponVisual["phones"];
}>();
</script>

<style scoped lang="scss">
.serve-coupon-phones {
  position: relative;
  width: 100%;
  height: 100%;
}

.serve-coupon-phones__left,
.serve-coupon-phones__right {
  position: absolute;
  top: 17.99%;
  width: 28.53%;
  height: 72.13%;
  object-fit: contain;
  object-position: bottom center;
  z-index: 1;
}

.serve-coupon-phones__left {
  left: 13.4%;
}

.serve-coupon-phones__right {
  left: 58.07%;
}

.serve-coupon-phones__center {
  position: absolute;
  left: 34.87%;
  top: 8.29%;
  width: 33.14%;
  height: 83.6%;
  object-fit: contain;
  object-position: bottom center;
  z-index: 2;
}
</style>
