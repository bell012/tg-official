<template>
  <a
    class="consult-contact-btn"
    :class="`consult-contact-btn--${variant}`"
    :href="LINK.telegram"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img :src="telegramIcon" alt="" class="consult-contact-btn__icon" />
    <span>TG包网开站联系：@TGbw88888888</span>
  </a>
</template>

<script setup lang="ts">
import telegramIcon from "@/static/consult/telegram-icon.png";
import { LINK } from "@/utils/jumpLink";

defineProps<{
  variant: "pc" | "h5";
}>();
</script>

<style scoped lang="scss">
@use "../../serve/serve-h5" as *;

.consult-contact-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: #ffc16f;
  color: #0d0c14;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
}

.consult-contact-btn--pc {
  gap: 8px;
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  font-size: 16px;

  .consult-contact-btn__icon {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    object-fit: cover;
  }
}

.consult-contact-btn--h5 {
  gap: h5(15);
  width: 100%;
  height: h5(120);
  padding: h5(10) h5(24);
  border-radius: h5(21);
  font-size: h5(42);

  .consult-contact-btn__icon {
    width: h5(60);
    height: h5(60);
    border-radius: h5(8);
    object-fit: cover;
    flex-shrink: 0;
  }
}
</style>
