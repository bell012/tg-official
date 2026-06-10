<template>
  <div class="consult-page relative min-h-screen overflow-x-hidden text-white">
    <ServePageBackground />
    <div class="relative z-[1]">
      <!-- PC — Figma 84:915 -->
      <div class="hidden lg:block">
        <ConsultHero />
        <div class="consult-pc-content">
          <div class="consult-pc-grid">
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
            v-model:current-page="currentPage"
            :total-pages="consultTotalPages"
          />
        </div>
      </div>

      <!-- H5 — Figma 164:2454 -->
      <div class="consult-h5-layout lg:!hidden">
        <ConsultArticleCard
          v-for="(article, index) in consultAllArticles"
          :key="`h5-${article.id}`"
          :article="article"
          :image="article.h5Image"
          variant="h5"
          :stagger-index="index % 3"
          :stagger-step="0.12"
          :image-loading="index < 2 ? 'eager' : 'lazy'"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import ServePageBackground from "@/views/serve/ServePageBackground.vue";
import ConsultArticleCard from "./ConsultArticleCard.vue";
import ConsultHero from "./ConsultHero.vue";
import ConsultPagination from "./ConsultPagination.vue";
import {
  consultAllArticles,
  consultArticlePages,
  consultTotalPages,
} from "./articles";

const currentPage = ref(1);

const currentPageArticles = computed(
  () => consultArticlePages[currentPage.value - 1] ?? []
);

watch(currentPage, () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
</script>

<style scoped lang="scss">
@use "../serve/serve-h5" as *;

.consult-pc-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 39px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px 96px;
}

.consult-pc-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 39px;
  width: 100%;
  align-items: stretch;

  :deep(.motion-reveal),
  :deep(.motion-reveal__inner) {
    height: 100%;
  }
}

@media (max-width: 1279px) {
  .consult-pc-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.consult-h5-layout {
  display: flex;
  flex-direction: column;
  gap: h5(30);
  width: 100%;
  padding: h5(60) h5(42) h5(60);
}
</style>
