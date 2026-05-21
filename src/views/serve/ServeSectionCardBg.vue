<template>
  <!-- Figma 82:1316 背景 -->
  <div
    class="serve-card-bg absolute inset-0 overflow-hidden rounded-[30px] bg-[#1a1921]"
    v-bind="$attrs"
  >
    <!-- Rectangle 4 底部微高光 -->
    <div
      class="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-white/[0.06]"
    />

    <!-- 82:1306 光效 -->
    <img
      :src="cardGlow"
      alt=""
      aria-hidden="true"
      class="serve-card-bg__glow pointer-events-none absolute z-0 max-w-none select-none"
    />

    <!-- 纹理紫色 1 — 82:1309 左上 + 网格 -->
    <img
      :src="texture"
      alt=""
      aria-hidden="true"
      class="serve-card-bg__texture serve-card-bg__texture--tl pointer-events-none absolute z-[1] h-[142px] w-[142px]"
    />

    <!-- 纹理紫色 2 — 82:1310 右下 + 网格 -->
    <img
      :src="texture"
      alt=""
      aria-hidden="true"
      class="serve-card-bg__texture serve-card-bg__texture--br pointer-events-none absolute z-[1] h-[142px] w-[142px]"
    />
  </div>
</template>

<script setup lang="ts">
import cardGlow from "@/static/serve/coupon-card-glow.svg";
import texture from "@/static/serve/card-texture-1ea6c2.png";

defineOptions({ inheritAttrs: false });
</script>

<style scoped lang="scss">
.serve-card-bg__glow {
  left: -16.6%;
  bottom: -12%;
  width: 120.7%;
  height: auto;
}

/* Figma opacity 10% */
.serve-card-bg__texture {
  opacity: 0.1;
}

.serve-card-bg__texture--tl {
  left: 14px;
  top: 14px;
}

.serve-card-bg__texture--br {
  right: 14px;
  bottom: 14px;
  transform: rotate(180deg);
}
</style>
