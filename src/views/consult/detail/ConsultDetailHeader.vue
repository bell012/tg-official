<template>
  <header class="consult-detail-header" :class="`consult-detail-header--${variant}`">
    <h1 class="consult-detail-header__title">{{ detail.title }}</h1>
    <div class="consult-detail-header__meta">
      <div class="consult-detail-header__author">
        <img :src="logoUrl" alt="" class="consult-detail-header__logo" />
        <span>{{ detail.author }}</span>
      </div>
      <time class="consult-detail-header__date">{{ detail.publishedAt }}</time>
    </div>
  </header>
</template>

<script setup lang="ts">
import logoUrl from "@/static/home/logo.png";
import type { ConsultDetailViewModel } from "../data";

defineProps<{
  detail: ConsultDetailViewModel;
  variant: "pc" | "h5";
}>();
</script>

<style scoped lang="scss">
@use "../../serve/serve-h5" as *;

.consult-detail-header--pc {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .consult-detail-header__title {
    margin: 0;
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    font-size: 36px;
    line-height: 1.35;
    color: #ffffff;
  }

  .consult-detail-header__meta {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .consult-detail-header__author {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 18px;
    color: #c2c2c2;
  }

  .consult-detail-header__logo {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: contain;
  }

  .consult-detail-header__date {
    font-size: 18px;
    color: #c2c2c2;
  }
}

.consult-detail-header--h5 {
  display: flex;
  flex-direction: column;
  gap: h5(30);

  .consult-detail-header__title {
    margin: 0;
    font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
    font-weight: 600;
    font-size: h5(48);
    line-height: 1.35;
    color: #ffffff;
  }

  .consult-detail-header__meta {
    display: flex;
    align-items: center;
    gap: h5(30);
  }

  .consult-detail-header__author {
    display: flex;
    align-items: center;
    gap: h5(12);
    font-size: h5(39);
    color: #c2c2c2;
  }

  .consult-detail-header__logo {
    width: h5(45);
    height: h5(45);
    border-radius: 50%;
    object-fit: contain;
  }

  .consult-detail-header__date {
    font-size: h5(39);
    color: #c2c2c2;
  }
}
</style>
