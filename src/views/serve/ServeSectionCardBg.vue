<template>
  <!-- Figma 82:1316 背景 -->
  <div
    class="serve-card-bg absolute inset-0 overflow-hidden rounded-[30px]"
    v-bind="$attrs"
  >
    <!-- Rectangle 4 底部微高光（Figma 极淡，避免底部发灰发亮） -->
    <div
      class="serve-card-bg__highlight pointer-events-none absolute inset-0 z-[1]"
      aria-hidden="true"
    />

    <!-- 82:1306 光效 -->
    <img
      :src="cardGlow"
      alt=""
      aria-hidden="true"
      class="serve-card-bg__glow pointer-events-none absolute z-0 max-w-none select-none"
    />
  </div>
</template>

<script setup lang="ts">
import cardGlow from "@/static/serve/coupon-card-glow.svg?url";

defineOptions({ inheritAttrs: false });
</script>

<style scoped lang="scss">
.serve-card-bg__glow {
  left: -16.6%;
  bottom: -8%;
  width: 120.7%;
  height: auto;
  opacity: 0.4;
}

/* Figma：底部白渐变仅末段极淡 */
.serve-card-bg__highlight {
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 80%,
    rgba(255, 255, 255, 0.015) 100%
  );
}

.serve-card-bg__texture {
  width: 13.64%; /* 142/1041 */
  height: auto;
  aspect-ratio: 1;
  opacity: 0.1;
  object-fit: contain;
}

.serve-card-bg__texture--tl {
  top: 1.34%; /* 14/1041 */
  left: 1.34%;
}

.serve-card-bg__texture--br {
  right: 1.34%;
  bottom: 1.34%;
}
</style>
