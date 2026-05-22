<template>
  <!-- 设计标注：序号下划线→标题 10px，标题→副标题 8px -->
  <div class="serve-mobile-heading">
    <div class="serve-mobile-heading__no-wrap">
      <span class="serve-mobile-heading__no">{{ paddedNo }}</span>
      <span class="serve-mobile-heading__bar" aria-hidden="true" />
    </div>
    <span class="serve-mobile-heading__title">{{ title }}</span>
    <span class="serve-mobile-heading__subtitle">{{ subtitle }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  no: string;
  title: string;
  subtitle: string;
}>();

const paddedNo = computed(() => props.no.padStart(2, "0"));
</script>

<style scoped lang="scss">
@use "./serve-h5" as *;

.serve-mobile-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.serve-mobile-heading__no-wrap {
  position: relative;
  width: h5(93);
  height: h5(91);
  flex-shrink: 0;
  margin-bottom: h5(30);
}

.serve-mobile-heading__no {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  font-family: Inter, "PingFang SC", sans-serif;
  font-weight: 700;
  font-size: h5(75);
  line-height: 1;
  color: #ffc16f;
  white-space: nowrap;
}

.serve-mobile-heading__bar {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: h5(14);
  background: linear-gradient(
    180deg,
    rgba(255, 193, 111, 0) 0%,
    rgba(255, 193, 111, 0.4) 100%
  );
}

.serve-mobile-heading__title {
  margin: 0 0 h5(24);
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  font-size: h5(66);
  line-height: 1;
  color: #ffffff;
  text-align: center;
}

.serve-mobile-heading__subtitle {
  margin: 0;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  font-size: h5(36);
  line-height: 1;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  text-transform: uppercase;
}
</style>
