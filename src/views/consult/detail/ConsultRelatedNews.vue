<template>
  <section
    class="consult-related"
    :class="`consult-related--${variant}`"
    aria-label="相关新闻"
  >
    <h2 class="consult-related__title">新闻</h2>
    <ul class="consult-related__list">
      <li v-for="item in items" :key="item.id" class="consult-related__item">
        <RouterLink :to="`/consult/${item.id}`" class="consult-related__link">
          <div class="consult-related__thumb">
            <img
              :src="variant === 'h5' ? item.h5Image : item.pcImage"
              :alt="item.title"
              loading="lazy"
            />
          </div>
          <div class="consult-related__text">
            <p class="consult-related__item-title">{{ item.title }}</p>
            <time class="consult-related__item-date">{{ item.displayDate }}</time>
          </div>
        </RouterLink>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { getRelatedArticles, type RelatedArticleItem } from "../data";

const props = defineProps<{
  excludeId: number;
  variant: "pc" | "h5";
}>();

const items = ref<RelatedArticleItem[]>([]);

function refreshRelated() {
  items.value = getRelatedArticles(props.excludeId, 5);
}

watch(() => props.excludeId, refreshRelated, { immediate: true });
</script>

<style scoped lang="scss">
@use "../../serve/serve-h5" as *;

.consult-related {
  border: 1px solid #322e28;
  background: #1a1921;
}

.consult-related--pc {
  border-radius: 18px;
  padding: 20px;

  .consult-related__title {
    margin: 0 0 20px;
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
  }

  .consult-related__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .consult-related__link {
    display: flex;
    gap: 12px;
    text-decoration: none;
    color: inherit;

    &:hover .consult-related__item-title {
      color: #ffc16f;
    }
  }

  .consult-related__thumb {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    border-radius: 10px;
    overflow: hidden;
    background: #322e28;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .consult-related__item-title {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
    color: #ffffff;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .consult-related__item-date {
    margin-top: 6px;
    font-size: 14px;
    color: #c2c2c2;
  }
}

.consult-related--h5 {
  border-radius: h5(18);
  padding: h5(30);

  .consult-related__title {
    margin: 0 0 h5(30);
    font-size: h5(42);
    font-weight: 600;
    color: #ffffff;
  }

  .consult-related__list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: h5(30);
  }

  .consult-related__link {
    display: flex;
    gap: h5(24);
    text-decoration: none;
    color: inherit;

    &:hover .consult-related__item-title {
      color: #ffc16f;
    }
  }

  .consult-related__thumb {
    flex-shrink: 0;
    width: h5(180);
    height: h5(180);
    border-radius: h5(30);
    overflow: hidden;
    background: #322e28;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .consult-related__item-title {
    margin: 0;
    font-size: h5(36);
    font-weight: 600;
    line-height: 1.4;
    color: #ffffff;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .consult-related__item-date {
    display: block;
    margin-top: h5(12);
    font-size: h5(33);
    color: #c2c2c2;
  }
}
</style>
