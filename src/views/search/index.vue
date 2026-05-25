<template>
  <div class="search-page page-motion relative min-h-screen overflow-x-hidden text-white">
    <ServePageBackground />
    <div class="relative z-[1]">
      <section class="search-hero">
        <h1 v-if="keyword" class="search-hero__title">
          <span class="search-hero__keyword">{{ keyword }}</span> 的搜索结果
        </h1>
        <h1 v-else class="search-hero__title">搜索结果</h1>
      </section>

      <p v-if="keyword && !filteredArticles.length" class="search-empty">
        未找到与「{{ keyword }}」相关的资讯
      </p>
      <p v-else-if="!keyword" class="search-empty">请输入搜索关键字</p>

      <template v-else>
        <!-- PC — 与 /consult 相同列表 -->
        <div class="hidden lg:block">
          <div class="search-pc-content">
            <div class="search-pc-grid">
              <ConsultArticleCard
                v-for="(article, index) in currentPageArticles"
                :key="article.id"
                :article="article"
                :image="article.pcImage"
                variant="pc"
                :stagger-index="index"
              />
            </div>
            <ConsultPagination
              v-if="totalPages > 1"
              v-model:current-page="currentPage"
              :total-pages="totalPages"
            />
          </div>
        </div>

        <!-- H5 — 与 /consult 相同，不分页 -->
        <div class="search-h5-layout lg:!hidden">
          <ConsultArticleCard
            v-for="(article, index) in filteredArticles"
            :key="`h5-${article.id}`"
            :article="article"
            :image="article.h5Image"
            variant="h5"
            :stagger-index="index"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
import ServePageBackground from "@/views/serve/ServePageBackground.vue";
import ConsultArticleCard from "@/views/consult/ConsultArticleCard.vue";
import ConsultPagination from "@/views/consult/ConsultPagination.vue";
import { consultAllArticles } from "@/utils/consultArticles";

const PAGE_SIZE = 6;

const route = useRoute();
const currentPage = ref(1);

const keyword = computed(() => {
  const q = route.query.q;
  return typeof q === "string" ? q.trim() : "";
});

const filteredArticles = computed(() => {
  const q = keyword.value.toLowerCase();
  if (!q) return [];
  return consultAllArticles.filter((a) =>
    a.title.toLowerCase().includes(q)
  );
});

const totalPages = computed(() =>
  Math.max(1, Math.ceil(filteredArticles.value.length / PAGE_SIZE))
);

const currentPageArticles = computed(() => {
  const start = (currentPage.value - 1) * PAGE_SIZE;
  return filteredArticles.value.slice(start, start + PAGE_SIZE);
});

watchEffect(() => {
  document.title = keyword.value ? `您正搜索 ${keyword.value}` : "搜索";
});

watch(keyword, () => {
  currentPage.value = 1;
});

watch(currentPage, () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>

<style scoped lang="scss">
@use "../serve/serve-h5" as *;

.search-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 80px 32px 40px;
  text-align: center;
}

.search-hero__title {
  margin: 0;
  max-width: 1200px;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  font-size: clamp(32px, 5vw, 64px);
  line-height: 1.3;
  color: #ffffff;
}

.search-hero__keyword {
  color: #ffc16f;
}

.search-hero__count {
  margin: 0;
  font-size: 18px;
  line-height: 1.4;
  color: #c2c2c2;
}

.search-empty {
  margin: 0 auto;
  max-width: 1440px;
  padding: 48px 32px 96px;
  text-align: center;
  font-size: 18px;
  color: #c2c2c2;
}

.search-pc-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 39px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px 96px;
}

.search-pc-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 39px;
  width: 100%;
  align-items: stretch;
}

@media (max-width: 1279px) {
  .search-pc-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.search-h5-layout {
  display: flex;
  flex-direction: column;
  gap: h5(30);
  width: 100%;
  padding: h5(30) h5(42) h5(60);
}
</style>
