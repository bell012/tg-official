<template>
  <div class="consult-detail-h5">
    <ConsultDetailHeader :detail="detail" variant="h5" />
    <ConsultDetailHero
      :image="detail.h5Image"
      :alt="detail.title"
      variant="h5"
    />
    <ConsultContactButton variant="h5" />
    <ConsultDetailBody :content="detail.content" variant="h5" />
    <ConsultRelatedNews :exclude-id="detail.id" variant="h5" />
  </div>
</template>

<script setup lang="ts">
import type { ConsultDetailViewModel } from "../data";
import ConsultContactButton from "./ConsultContactButton.vue";
import ConsultDetailBody from "./ConsultDetailBody.vue";
import ConsultDetailHeader from "./ConsultDetailHeader.vue";
import ConsultDetailHero from "./ConsultDetailHero.vue";
import ConsultRelatedNews from "./ConsultRelatedNews.vue";

defineProps<{
  detail: ConsultDetailViewModel;
}>();
</script>

<style scoped lang="scss">
@use "../../serve/serve-h5" as *;

.consult-detail-h5 {
  display: flex;
  flex-direction: column;
  gap: h5(30);
  width: 100%;
  padding: h5(60) h5(42) h5(60);
}
</style>
