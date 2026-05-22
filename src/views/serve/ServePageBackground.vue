<template>
  <div class="serve-page-bg" aria-hidden="true">
    <div class="serve-page-bg__ellipse serve-page-bg__ellipse--orange" />
    <div class="serve-page-bg__ellipse serve-page-bg__ellipse--blue" />
  </div>
</template>

<style scoped lang="scss">
/* Figma 73:535 — 包网服务页背景 */
.serve-page-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
  background-color: #0d0c14;
}

.serve-page-bg__ellipse {
  position: absolute;
  border-radius: 50%;
  will-change: transform;
}

.serve-page-bg__ellipse--orange {
  top: 341px;
  left: -818px;
  width: 1263px;
  height: 1476px;
  background: rgba(192, 89, 31, 0.15);
  filter: blur(800px);
}

.serve-page-bg__ellipse--blue {
  top: 1204px;
  left: 1698px;
  width: 883px;
  height: 1040px;
  background: rgba(27, 93, 212, 0.15);
  filter: blur(800px);
}

@media (max-width: 1919px) {
  .serve-page-bg__ellipse--orange {
    top: 5.08%;
    left: -42.6%;
    width: 65.8%;
    height: auto;
    aspect-ratio: 1263 / 1476;
  }

  .serve-page-bg__ellipse--blue {
    top: 17.9%;
    left: 88.4%;
    width: 46%;
    height: auto;
    aspect-ratio: 883 / 1040;
  }
}

@media (max-width: 767px) {
  .serve-page-bg__ellipse--orange {
    top: 80px;
    left: -55%;
    width: 90%;
    filter: blur(400px);
  }

  .serve-page-bg__ellipse--blue {
    top: 35%;
    left: 55%;
    width: 70%;
    filter: blur(400px);
  }
}
</style>
