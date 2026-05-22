<template>
  <article class="consult-detail-panel">
    <ConsultDetailHeader :detail="detail" variant="pc" />
    <ConsultDetailHero
      :image="detail.pcImage"
      :alt="detail.title"
      variant="pc"
    />
    <ConsultDetailBody :content="detail.content" variant="pc" />
  </article>
</template>

<script setup lang="ts">
import type { ConsultDetailViewModel } from "../data";
import ConsultDetailBody from "./ConsultDetailBody.vue";
import ConsultDetailHeader from "./ConsultDetailHeader.vue";
import ConsultDetailHero from "./ConsultDetailHero.vue";

defineProps<{
  detail: ConsultDetailViewModel;
}>();
</script>

<style scoped lang="scss">
.consult-detail-panel {
  display: flex;
  flex-direction: column;
  gap: 50px;
  width: 100%;
  max-width: 989px;
  padding: 20px;
  border: 1px solid #322e28;
  border-radius: 30px;
  background: #1a1921;
}
</style>
