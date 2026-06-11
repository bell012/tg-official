<template>
  <section class="serve-hero">
    <RevealGroup class="serve-hero__inner">
      <div class="serve-hero__title-box">
        <span class="serve-hero__watermark" aria-hidden="true">包网服务</span>
        <h1 class="serve-hero__title">包网服务</h1>
      </div>
      <p class="serve-hero__intro">{{ intro }}</p>
    </RevealGroup>
  </section>
</template>

<script setup lang="ts">
import RevealGroup from "@/components/RevealGroup.vue";

defineProps<{ intro: string }>();
</script>

<style scoped lang="scss">
@use "./serve-h5" as *;

.serve-hero {
  display: flex;
  justify-content: center;
  padding: 120px 24px 24px;

  @media (max-width: 767px) {
    padding: 0;
  }

  @media (min-width: 768px) {
    padding: 120px 32px 32px;
  }
}

.serve-hero__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 680px;
  gap: 20px;

  @media (max-width: 767px) {
    max-width: 100%;
    gap: h5(20);
  }
}

.serve-hero__title-box {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 199px;
  flex-shrink: 0;

  @media (max-width: 767px) {
    width: h5(600);
    height: h5(199);
  }
}

.serve-hero__watermark {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: MiSans, "PingFang SC", -apple-system, sans-serif;
  font-weight: 700;
  font-size: 150px;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  background: linear-gradient(
    180deg,
    rgba(194, 194, 194, 1) 14%,
    rgba(13, 12, 20, 1) 84%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0.1;
  pointer-events: none;
  user-select: none;

  @media (max-width: 767px) {
    font-size: h5(150);
  }
}

.serve-hero__title {
  position: absolute;
  left: 16.67%;
  top: 25.63%;
  width: 66.67%;
  height: 70.35%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  font-size: 100px;
  line-height: 1;
  color: #ffffff;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 767px) {
    font-size: h5(100);
  }
}

.serve-hero__intro {
  width: 100%;
  margin: 0;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.6;
  text-align: center;
  color: #c2c2c2;
  white-space: pre-line;

  @media (max-width: 767px) {
    max-width: 100%;
    font-size: h5(33);
    line-height: 1.67;
  }
}
</style>
