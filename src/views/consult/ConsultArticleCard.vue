<template>
  <MotionReveal :stagger-index="staggerIndex">
    <RouterLink
      :to="`/consult/${article.id}`"
      class="consult-card-link"
      :class="`consult-card-link--${variant}`"
    >
      <article class="consult-card" :class="`consult-card--${variant}`">
        <div class="consult-card__media">
          <img
            class="consult-card__image"
            :src="image"
            :alt="article.title"
            loading="lazy"
            decoding="async"
          />
        </div>
        <h2 class="consult-card__title">{{ article.title }}</h2>
      </article>
    </RouterLink>
  </MotionReveal>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import MotionReveal from "@/components/MotionReveal.vue";
import type { ConsultArticle } from "./articles";

defineProps<{
  article: ConsultArticle;
  image: string;
  variant: "pc" | "h5";
  staggerIndex?: number;
}>();
</script>

<style scoped lang="scss">
@use "../serve/serve-h5" as *;

.consult-card-link {
  display: block;
  width: 100%;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.consult-card-link--h5 {
  -webkit-tap-highlight-color: transparent;
}

.consult-card-link:hover .consult-card__image,
.consult-card-link:focus-visible .consult-card__image {
  transform: scale(1.22);
}

/* Figma PC — 454×620，圆角 30，边框 #322E28，背景 #1A1921 */
.consult-card--pc {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 620px;
  border: 1px solid #322e28;
  border-radius: 30px;
  background: #1a1921;
  overflow: hidden;

  .consult-card__media {
    width: 100%;
    height: 455px;
    flex-shrink: 0;
    overflow: hidden;
  }

  .consult-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s cubic-bezier(0.2, 1, 0.2, 1);
  }

  .consult-card__title {
    flex: 1;
    margin: 0;
    padding: 30px;
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.42;
    color: #ffffff;
  }
}

/* Figma H5 — 1041 宽，图高 585，标题 padding 42，字号 42 */
.consult-card--h5 {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #322e28;
  border-radius: h5(30);
  background: #1a1921;
  overflow: hidden;

  .consult-card__media {
    width: 100%;
    height: h5(585);
    flex-shrink: 0;
    overflow: hidden;
  }

  .consult-card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s cubic-bezier(0.2, 1, 0.2, 1);
  }

  .consult-card__title {
    margin: 0;
    padding: h5(42);
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    font-size: h5(42);
    line-height: 1.42;
    color: #ffffff;
  }
}

@media (prefers-reduced-motion: reduce) {
  .consult-card__image {
    transition: none;
  }

  .consult-card-link:hover .consult-card__image,
  .consult-card-link:focus-visible .consult-card__image {
    transform: none;
  }
}
</style>
