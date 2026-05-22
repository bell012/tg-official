<template>
  <section class="consult-hero">
    <div class="consult-hero__title-box">
      <span class="consult-hero__watermark" aria-hidden="true">包网资讯</span>
      <h1 class="consult-hero__title">包网资讯</h1>
    </div>
  </section>
</template>

<style scoped lang="scss">
.consult-hero {
  display: flex;
  justify-content: center;
  padding: 120px 32px 48px;
}

.consult-hero__title-box {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 199px;
  flex-shrink: 0;
}

.consult-hero__watermark {
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
}

.consult-hero__title {
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
}
</style>
