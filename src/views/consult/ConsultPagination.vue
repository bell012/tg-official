<template>
  <nav class="consult-pagination" aria-label="资讯分页">
    <button
      type="button"
      class="consult-pagination__btn consult-pagination__btn--icon"
      :disabled="currentPage <= 1"
      aria-label="上一页"
      @click="goTo(currentPage - 1)"
    >
      <img :src="prevIcon" alt="" width="56" height="56" />
    </button>

    <button
      v-for="page in totalPages"
      :key="page"
      type="button"
      class="consult-pagination__btn"
      :class="{ 'consult-pagination__btn--active': page === currentPage }"
      :aria-current="page === currentPage ? 'page' : undefined"
      @click="goTo(page)"
    >
      {{ page }}
    </button>

    <button
      type="button"
      class="consult-pagination__btn consult-pagination__btn--icon"
      :disabled="currentPage >= totalPages"
      aria-label="下一页"
      @click="goTo(currentPage + 1)"
    >
      <img :src="nextIcon" alt="" width="56" height="56" />
    </button>
  </nav>
</template>

<script setup lang="ts">
import prevIcon from "@/static/consult/pagination-prev.svg";
import nextIcon from "@/static/consult/pagination-next.svg";

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  "update:currentPage": [page: number];
}>();

function goTo(page: number) {
  if (page < 1 || page > props.totalPages || page === props.currentPage) return;
  emit("update:currentPage", page);
}
</script>

<style scoped lang="scss">
/* Figma 166:1906 — gap 24，按钮 56×56，圆角 12 */
.consult-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}

.consult-pagination__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  padding: 0;
  border: none;
  border-radius: 12px;
  background: #2a2833;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1;
  color: #ffffff;
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: #353340;
  }

  &--active {
    background: #ffc16f;
    color: #0d0c14;

    &:hover {
      background: #ffc16f;
    }
  }

  &--icon {
    background: transparent;

    img {
      display: block;
      width: 56px;
      height: 56px;
    }

    &:not(:disabled):hover img {
      opacity: 0.85;
    }
  }
}
</style>
