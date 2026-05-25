<template>
  <div class="connect-h5">
    <section class="connect-h5__hero">
      <div class="connect-h5__hero-title-box">
        <span class="connect-h5__hero-watermark" aria-hidden="true">联系我们</span>
        <h1 class="connect-h5__hero-title">联系我们</h1>
      </div>
      <p class="connect-h5__hero-intro">{{ connectHeroIntro }}</p>
    </section>

    <div class="connect-h5__visual">
      <img :src="contactImage" alt="联系我们" class="connect-h5__image" />
    </div>

    <section class="connect-h5__info">
      <article
        v-for="block in contactBlocks"
        :key="block.title"
        class="connect-h5__block"
      >
        <h2 class="connect-h5__block-title">{{ block.title }}</h2>
        <img :src="dividerLine" alt="" class="connect-h5__divider" aria-hidden="true" />
        <p
          v-for="(line, i) in block.lines"
          :key="i"
          class="connect-h5__block-line"
        >
          <a
            v-if="'href' in block && i === 0"
            :href="block.href"
            class="connect-h5__link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ line }}
          </a>
          <template v-else>{{ line }}</template>
        </p>
      </article>
    </section>

    <section class="connect-h5__touch">
      <span class="connect-h5__label">{{ touchSection.label }}</span>
      <h2 class="connect-h5__touch-title">{{ touchSection.title }}</h2>
      <p class="connect-h5__touch-desc">{{ touchSection.desc }}</p>
      <a
        href="https://t.me/tg168"
        class="connect-h5__cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="iconTg" alt="" class="connect-h5__cta-icon" />
        <span>{{ touchSection.cta }}</span>
      </a>
      <ul class="connect-h5__social">
        <li v-for="item in socialLinks" :key="item.label">
          <a
            :href="item.href"
            class="connect-h5__social-link"
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
@use "../serve/serve-h5" as *;

.connect-h5 {
  display: flex;
  flex-direction: column;
  gap: h5(90);
  width: 100%;
  padding: h5(60) h5(42) h5(120);
  color: #fff;
}

.connect-h5__hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: h5(20);
}

.connect-h5__hero-title-box {
  position: relative;
  width: h5(600);
  height: h5(199);
}

.connect-h5__hero-watermark {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: MiSans, "PingFang SC", sans-serif;
  font-weight: 700;
  font-size: h5(150);
  line-height: 1;
  background: linear-gradient(180deg, #c2c2c2 14%, #0d0c14 84%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0.1;
  white-space: nowrap;
}

.connect-h5__hero-title {
  position: absolute;
  left: 16.67%;
  top: 25.63%;
  width: 66.67%;
  height: 70.35%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: h5(100);
  font-weight: 600;
  line-height: 1;
}

.connect-h5__hero-intro {
  margin: 0;
  font-size: h5(33);
  line-height: 1.67;
  text-align: center;
  color: #c2c2c2;
}

.connect-h5__visual {
  display: flex;
  justify-content: center;
}

.connect-h5__image {
  width: 100%;
  max-width: h5(900);
  border-radius: h5(24);
  object-fit: contain;
}

.connect-h5__info {
  display: flex;
  flex-direction: column;
  gap: h5(60);
}

.connect-h5__block-title {
  margin: 0 0 h5(16);
  font-size: h5(48);
  font-weight: 600;
}

.connect-h5__divider {
  display: block;
  width: h5(440);
  max-width: 100%;
  margin-bottom: h5(24);
}

.connect-h5__block-line {
  margin: 0 0 h5(12);
  font-size: h5(33);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
}

.connect-h5__link {
  color: #ffc16f;
  text-decoration: none;
}

.connect-h5__touch {
  display: flex;
  flex-direction: column;
  gap: h5(32);
  padding: h5(60);
  border-radius: h5(36);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 193, 111, 0.15);
}

.connect-h5__label {
  font-size: h5(28);
  font-weight: 500;
  letter-spacing: 0.12em;
  color: #ffc16f;
  text-transform: uppercase;
}

.connect-h5__touch-title {
  margin: 0;
  font-size: h5(72);
  font-weight: 600;
  line-height: 1.2;
}

.connect-h5__touch-desc {
  margin: 0;
  font-size: h5(33);
  line-height: 1.67;
  color: #c2c2c2;
}

.connect-h5__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: h5(15);
  width: 100%;
  height: h5(120);
  border-radius: h5(21);
  background: #ffc16f;
  color: #0d0c14;
  font-size: h5(42);
  font-weight: 600;
  text-decoration: none;
}

.connect-h5__cta-icon {
  width: h5(60);
  height: h5(60);
}

.connect-h5__social {
  display: flex;
  justify-content: center;
  gap: h5(36);
  margin: h5(16) 0 0;
  padding: 0;
  list-style: none;
}

.connect-h5__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: h5(100);
  height: h5(100);
  border-radius: 50%;
  border: 1px solid rgba(255, 193, 111, 0.35);

  img {
    width: h5(50);
    height: h5(50);
  }
}
</style>
