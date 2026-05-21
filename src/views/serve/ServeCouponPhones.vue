<template>
  <!-- Figma 84:700 左边素材 694×567 -->
  <div class="serve-coupon-phones">
    <img
      :src="phoneLeft"
      alt=""
      class="serve-coupon-phones__left"
      aria-hidden="true"
    />
    <img
      :src="phoneRight"
      alt=""
      class="serve-coupon-phones__right"
      aria-hidden="true"
    />
    <img
      :src="phoneCenter"
      alt="票券活动"
      class="serve-coupon-phones__center"
    />
  </div>
</template>

<script setup lang="ts">
import phoneLeft from "@/static/serve/coupon-phone-left.png";
import phoneCenter from "@/static/serve/coupon-phone-center.png";
import phoneRight from "@/static/serve/coupon-phone-right.png";
</script>

<style scoped lang="scss">
/* Figma 84:704 / 84:710 / 84:707 相对 694×567 定位 */
.serve-coupon-phones {
  position: relative;
  width: 100%;
  height: 100%;
}

.serve-coupon-phones__left,
.serve-coupon-phones__right {
  position: absolute;
  top: 17.99%; /* 102/567 */
  width: 28.53%; /* 198/694 */
  height: 72.13%; /* 409/567 */
  object-fit: contain;
  object-position: bottom center;
  z-index: 1;
}

.serve-coupon-phones__left {
  left: 13.4%; /* 93/694 */
}

.serve-coupon-phones__right {
  left: 58.07%; /* 403/694 */
}

.serve-coupon-phones__center {
  position: absolute;
  left: 34.87%; /* 242/694 */
  top: 8.29%; /* 47/567 */
  width: 33.14%; /* 230/694 */
  height: 83.6%; /* 474/567 */
  object-fit: contain;
  object-position: bottom center;
  z-index: 2;
}
</style>
