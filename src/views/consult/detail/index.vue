<template>
  <div v-if="detail" class="consult-detail-page relative min-h-screen overflow-x-hidden text-white">
    <ServePageBackground />
    <div class="relative z-[1]">
      <div class="hidden md:block">
        <ConsultDetailPc :detail="detail" />
      </div>
      <div class="md:!hidden">
        <ConsultDetailMobile :detail="detail" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import ServePageBackground from "@/views/serve/ServePageBackground.vue";
import { getArticleDetail } from "../data";
import ConsultDetailMobile from "./ConsultDetailMobile.vue";
import ConsultDetailPc from "./ConsultDetailPc.vue";

const route = useRoute();
const router = useRouter();

const articleId = computed(() => Number(route.params.id));
const detail = computed(() => {
  const id = articleId.value;
  if (!Number.isInteger(id) || id < 1 || id > 18) return null;
  return getArticleDetail(id);
});

watch(
  detail,
  (value) => {
    if (!value) {
      router.replace("/consult");
      return;
    }
    document.title = value.title;
  },
  { immediate: true }
);
</script>
