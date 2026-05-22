<template>
  <div class="consult-detail-pc">
    <ConsultDetailArticlePanel :detail="detail" />
    <aside class="consult-detail-pc__aside">
      <ConsultContactButton variant="pc" />
      <ConsultRelatedNews :exclude-id="detail.id" variant="pc" />
    </aside>
  </div>
</template>

<script setup lang="ts">
import type { ConsultDetailViewModel } from "../data";
import ConsultContactButton from "./ConsultContactButton.vue";
import ConsultDetailArticlePanel from "./ConsultDetailArticlePanel.vue";
import ConsultRelatedNews from "./ConsultRelatedNews.vue";

defineProps<{
  detail: ConsultDetailViewModel;
}>();
</script>

<style scoped lang="scss">
.consult-detail-pc {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 39px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 48px 32px 96px;
}

.consult-detail-pc__aside {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 427px;
  flex-shrink: 0;
  align-self: flex-start;
}
</style>
