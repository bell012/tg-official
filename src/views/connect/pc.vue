<template>
  <div class="connect-pc">
    <section class="connect-pc__hero">
      <div class="connect-pc__hero-title-box">
        <span class="connect-pc__hero-watermark" aria-hidden="true">联系我们</span>
        <h1 class="connect-pc__hero-title">联系我们</h1>
      </div>
      <p class="connect-pc__hero-intro">{{ connectHeroIntro }}</p>
    </section>

    <section class="connect-pc__main">
      <div class="connect-pc__info">
        <article
          v-for="block in contactBlocks"
          :key="block.title"
          class="connect-pc__block"
        >
          <h2 class="connect-pc__block-title">{{ block.title }}</h2>
          <img :src="dividerLine" alt="" class="connect-pc__divider" aria-hidden="true" />
          <p
            v-for="(line, i) in block.lines"
            :key="i"
            class="connect-pc__block-line"
          >
            <a
              v-if="'href' in block && i === 0"
              :href="block.href"
              class="connect-pc__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ line }}
            </a>
            <template v-else>{{ line }}</template>
          </p>
        </article>
      </div>
      <div class="connect-pc__visual">
        <img :src="contactImage" alt="联系我们" class="connect-pc__image" />
      </div>
    </section>

    <section class="connect-pc__touch">
      <div class="connect-pc__touch-inner">
        <span class="connect-pc__label">{{ touchSection.label }}</span>
        <h2 class="connect-pc__touch-title">{{ touchSection.title }}</h2>
        <p class="connect-pc__touch-desc">{{ touchSection.desc }}</p>
        <a
          href="https://t.me/tg168"
          class="connect-pc__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="iconTg" alt="" class="connect-pc__cta-icon" />
          <span>{{ touchSection.cta }}</span>
        </a>
      </div>
      <ul class="connect-pc__social">
        <li v-for="item in socialLinks" :key="item.label">
          <a
            :href="item.href"
            class="connect-pc__social-link"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="item.label"
          >
            <img :src="item.icon" alt="" />
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import contactImage from "@/static/about/lightBack.png";
import dividerLine from "@/static/about/Group3.svg?url";
import iconTg from "@/static/about/tg.svg";
import iconWhatsApp from "@/static/about/whatsApp.svg";
import iconFacebook from "@/static/about/faceBook.svg";
import {
  connectHeroIntro,
  contactBlocks,
  touchSection,
} from "./connect-content";

const socialLinks = [
  { label: "Telegram", icon: iconTg, href: "https://t.me/tg168" },
  { label: "WhatsApp", icon: iconWhatsApp, href: "https://t.me/tg168" },
  { label: "Facebook", icon: iconFacebook, href: "https://t.me/tg168" },
];
</script>

<style scoped lang="scss">
.connect-pc {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 32px 120px;
  color: #fff;
}

.connect-pc__hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 120px 0 80px;
}

.connect-pc__hero-title-box {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 199px;
}

.connect-pc__hero-watermark {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: MiSans, "PingFang SC", sans-serif;
  font-weight: 700;
  font-size: 150px;
  line-height: 1;
  background: linear-gradient(180deg, #c2c2c2 14%, #0d0c14 84%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0.1;
  pointer-events: none;
  white-space: nowrap;
}

.connect-pc__hero-title {
  position: absolute;
  left: 16.67%;
  top: 25.63%;
  width: 66.67%;
  height: 70.35%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  font-weight: 600;
  line-height: 1;
}

.connect-pc__hero-intro {
  max-width: 680px;
  margin: 0;
  font-size: 20px;
  line-height: 1.6;
  text-align: center;
  color: #c2c2c2;
}

.connect-pc__main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  margin-bottom: 100px;
}

.connect-pc__info {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.connect-pc__block-title {
  margin: 0 0 12px;
  font-size: 24px;
  font-weight: 600;
}

.connect-pc__divider {
  display: block;
  width: 220px;
  max-width: 100%;
  height: auto;
  margin-bottom: 16px;
}

.connect-pc__block-line {
  margin: 0 0 8px;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
}

.connect-pc__link {
  color: #ffc16f;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.85;
  }
}

.connect-pc__visual {
  display: flex;
  justify-content: center;
}

.connect-pc__image {
  width: 100%;
  max-width: 578px;
  height: auto;
  border-radius: 16px;
  object-fit: contain;
}

.connect-pc__touch {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 48px;
  padding: 64px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 193, 111, 0.15);
}

.connect-pc__touch-inner {
  flex: 1;
  max-width: 720px;
}

.connect-pc__label {
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.12em;
  color: #ffc16f;
  text-transform: uppercase;
}

.connect-pc__touch-title {
  margin: 0 0 16px;
  font-size: 40px;
  font-weight: 600;
}

.connect-pc__touch-desc {
  margin: 0 0 32px;
  font-size: 16px;
  line-height: 1.8;
  color: #c2c2c2;
}

.connect-pc__cta {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  border-radius: 12px;
  background: #ffc16f;
  color: #0d0c14;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
}

.connect-pc__cta-icon {
  width: 32px;
  height: 32px;
}

.connect-pc__social {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.connect-pc__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid rgba(255, 193, 111, 0.35);
  transition: border-color 0.2s, background 0.2s;

  img {
    width: 28px;
    height: 28px;
  }

  &:hover {
    border-color: #ffc16f;
    background: rgba(255, 193, 111, 0.08);
  }
}
</style>
