<template>
  <div class="about-h5">
    <!-- Hero -->
    <section class="about-h5__hero">
      <div class="about-h5__hero-title-box">
        <span class="about-h5__hero-watermark" aria-hidden="true">关于我们</span>
        <h1 class="about-h5__hero-title">关于我们</h1>
      </div>
      <p class="about-h5__hero-intro">{{ aboutHeroIntro }}</p>
    </section>

    <!-- 集团介绍 -->
    <section class="about-h5__intro">
      <div class="about-h5__intro-image-wrap">
        <img :src="introImage" alt="集团总部夜景" class="about-h5__intro-image" />
      </div>
      <div class="about-h5__intro-content">
        <span class="about-h5__intro-label">{{ groupIntro.label }}</span>
        <h2 class="about-h5__intro-title">
          <span class="about-h5__intro-title-text">{{ groupIntro.title }}</span>
          <img
            :src="introDivider"
            alt=""
            class="about-h5__intro-line"
            aria-hidden="true"
          />
        </h2>
        <p class="about-h5__intro-brand">{{ groupIntro.brand }}</p>
        <p class="about-h5__intro-body">{{ groupIntro.body }}</p>
      </div>
    </section>

    <!-- 核心价值观 -->
    <section class="about-h5__values">
      <div class="about-h5__values-head">
        <span class="about-h5__values-label">{{ coreValuesSection.label }}</span>
        <h2 class="about-h5__values-title">
          <span class="about-h5__values-title-text">{{ coreValuesSection.title }}</span>
          <img
            :src="introDivider"
            alt=""
            class="about-h5__values-line"
            aria-hidden="true"
          />
        </h2>
        <p class="about-h5__values-sub">{{ coreValuesSection.subtitle }}</p>
      </div>
      <div class="about-h5__values-list">
        <article
          v-for="item in coreValues"
          :key="item.title"
          class="about-h5__value-card"
        >
          <img :src="valueCardBg" alt="" class="about-h5__value-card-bg" aria-hidden="true" />
          <div class="about-h5__value-card-inner">
            <img
              :src="item.icon"
              :alt="item.title"
              class="about-h5__value-icon"
              :style="{
                width: `calc(${item.iconWidthH5} / 1125 * 100vw)`,
                height: `calc(${item.iconHeightH5} / 1125 * 100vw)`,
              }"
            />
            <h3 class="about-h5__value-title">{{ item.title }}</h3>
            <p class="about-h5__value-desc">{{ item.desc }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- 客户评价 -->
    <section class="about-h5__reviews">
      <img :src="reviewsBg" alt="" class="about-h5__reviews-bg" aria-hidden="true" />
      <div class="about-h5__reviews-overlay" aria-hidden="true" />
      <div class="about-h5__reviews-content">
        <span class="about-h5__label about-h5__label--cn">客户评价</span>
        <h2 class="about-h5__reviews-title">客户满意 成就我们</h2>
        <blockquote class="about-h5__reviews-quote">
          <img
            :src="quoteLeft"
            alt=""
            class="about-h5__quote-mark about-h5__quote-mark--left"
            aria-hidden="true"
          />
          <p class="about-h5__reviews-quote-text">
            {{ reviewsQuote }}
            <img
              :src="quoteRight"
              alt=""
              class="about-h5__quote-mark about-h5__quote-mark--right"
              aria-hidden="true"
            />
          </p>
        </blockquote>
        <ul class="about-h5__stats">
          <li v-for="stat in reviewStats" :key="stat.label" class="about-h5__stat">
            <component :is="statIconMap[stat.icon]" class="about-h5__stat-icon" aria-hidden="true" />
            <div>
              <strong>{{ stat.value }}</strong>
              <span>{{ stat.label }}</span>
            </div>
          </li>
        </ul>
        <article class="about-h5__testimonial">
          <div class="about-h5__stars">
            <img v-for="n in 5" :key="n" :src="starIcon" alt="" class="about-h5__star" />
          </div>
          <h3>{{ testimonial.title }}</h3>
          <p>{{ testimonial.body }}</p>
          <footer class="about-h5__testimonial-author">
            <img :src="founderPhoto" :alt="testimonial.name" />
            <div>
              <p class="about-h5__author-name">{{ testimonial.name }}</p>
              <p class="about-h5__author-role">{{ testimonial.role }}</p>
            </div>
          </footer>
        </article>
      </div>
    </section>

    <!-- 团队 -->
    <section class="about-h5__team">
      <header class="about-h5__team-head">
        <span class="about-h5__team-line" aria-hidden="true" />
        <div>
          <span class="about-h5__label">TEAM</span>
          <h2 class="about-h5__team-title">我们的团队</h2>
          <p class="about-h5__team-sub">OUR TEAM</p>
        </div>
      </header>
      <div class="about-h5__team-list">
        <article
          v-for="(member, index) in teamMembers"
          :key="member.name"
          class="about-h5__member-card"
        >
          <img
            :src="member.photo"
            :alt="member.name"
            :class="{ 'about-h5__member-photo--alt': index > 0 }"
          />
          <div class="about-h5__member-info">
            <h3>{{ member.name }}</h3>
            <p>{{ member.role }}</p>
            <div class="about-h5__member-social">
              <a href="#" aria-label="Telegram"><img :src="iconTg" alt="" /></a>
              <a href="#" aria-label="WhatsApp"><img :src="iconWhatsApp" alt="" /></a>
              <a href="#" aria-label="Facebook"><img :src="iconFacebook" alt="" /></a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- 促销 -->
    <section class="about-h5__promo">
      <img :src="promoBg" alt="" class="about-h5__promo-bg" aria-hidden="true" />
      <div class="about-h5__promo-content">
        <p class="about-h5__promo-tag">{{ promo.tag }}</p>
        <h2>{{ promo.title }}</h2>
        <p class="about-h5__promo-desc">{{ promo.desc }}</p>
        <button type="button" class="about-h5__promo-btn">{{ promo.cta }}</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";
import introImage from "@/static/about/back.png";
import introDivider from "@/static/about/Group3.svg?url";
import valueCardBg from "@/static/about/Group2.png";
import reviewsBg from "@/static/about/back.png";
import quoteLeft from "@/static/about/svg/left.svg?url";
import quoteRight from "@/static/about/svg/right.svg?url";
import promoBg from "@/static/about/bottomBack.png";
import founderPhoto from "@/static/about/founder.png";
import starIcon from "@/static/about/star.svg";
import iconTg from "@/static/about/tg.svg";
import iconWhatsApp from "@/static/about/whatsApp.svg";
import iconFacebook from "@/static/about/faceBook.svg";
import IconTrophy from "@/static/about/trophy.svg?component";
import IconStar from "@/static/about/star.svg?component";
import IconUsers from "@/static/about/doubleAvatar.svg?component";
import {
  aboutHeroIntro,
  coreValues,
  coreValuesSection,
  groupIntro,
  promo,
  reviewStats,
  reviewsQuote,
  teamMembers,
  testimonial,
} from "./about-content";

const statIconMap: Record<string, Component> = {
  trophy: IconTrophy,
  star: IconStar,
  users: IconUsers,
};
</script>

<style scoped lang="scss">
@use "./about-h5" as *;

.about-h5 {
  display: flex;
  flex-direction: column;
  gap: about-h5(90);
  padding: about-h5(60) about-h5(42) about-h5(80);
  color: #fff;
}

.about-h5__hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.about-h5__hero-title-box {
  position: relative;
  width: about-h5(600);
  height: about-h5(199);
}

.about-h5__hero-watermark {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: MiSans, "PingFang SC", sans-serif;
  font-weight: 700;
  font-size: about-h5(150);
  line-height: 1;
  background: linear-gradient(180deg, rgba(194, 194, 194, 1) 14%, rgba(13, 12, 20, 1) 84%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0.1;
}

.about-h5__hero-title {
  position: absolute;
  left: 16.67%;
  top: 25.63%;
  width: 66.67%;
  height: 70.35%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: about-h5(100);
  font-weight: 600;
  line-height: 1;
}

.about-h5__hero-intro {
  margin: about-h5(20) 0 0;
  font-size: about-h5(33);
  line-height: 1.67;
  color: #c2c2c2;
}

.about-h5__intro {
  display: flex;
  flex-direction: column;
  gap: about-h5(40);
}

.about-h5__intro-image-wrap {
  border-radius: about-h5(24);
  overflow: hidden;
}

.about-h5__intro-image {
  width: 100%;
  display: block;
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

.about-h5__label {
  display: block;
  margin-bottom: about-h5(16);
  font-size: about-h5(28);
  letter-spacing: 0.12em;
  color: #e65616;
  text-transform: uppercase;

  &--cn {
    text-transform: none;
    letter-spacing: 0.06em;
  }
}

.about-h5__intro-label {
  display: block;
  margin-bottom: about-h5(16);
  font-size: about-h5(28);
  font-weight: 500;
  letter-spacing: 0.12em;
  color: #d4a055;
  text-transform: uppercase;
}

.about-h5__intro-title {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  max-width: 100%;
  margin: 0 0 about-h5(28);
  padding: 0;
  font-weight: 600;
}

.about-h5__intro-title-text {
  display: block;
  font-size: about-h5(56);
  line-height: 1;
  color: #ffffff;
}

.about-h5__intro-line {
  display: block;
  width: about-h5(220);
  max-width: 100%;
  height: about-h5(10);
  margin-top: about-h5(-6);
  object-fit: fill;
  pointer-events: none;
}

.about-h5__intro-brand {
  margin: 0 0 about-h5(24);
  font-size: about-h5(40);
  font-weight: 600;
  line-height: 1.3;
  color: #ffffff;
}

.about-h5__intro-body {
  margin: 0;
  font-size: about-h5(30);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
}

.about-h5__values-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: about-h5(48);
}

.about-h5__values-label {
  display: block;
  margin-bottom: about-h5(16);
  font-size: about-h5(28);
  font-weight: 500;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #d4a055;
}

.about-h5__values-title {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  max-width: 100%;
  margin: 0 0 about-h5(24);
  padding: 0;
  font-weight: 600;
}

.about-h5__values-title-text {
  position: relative;
  z-index: 1;
  display: block;
  font-size: about-h5(56);
  line-height: 1;
  color: #ffffff;
}

.about-h5__values-line {
  display: block;
  width: about-h5(220);
  max-width: 100%;
  height: about-h5(10);
  margin-top: about-h5(-6);
  object-fit: fill;
  pointer-events: none;
  z-index: 0;
}

.about-h5__values-sub {
  margin: 0;
  font-size: about-h5(30);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
}

.about-h5__values-list {
  display: flex;
  flex-direction: column;
  gap: about-h5(32);
}

.about-h5__value-card {
  position: relative;
  border-radius: about-h5(24);
  overflow: hidden;
  min-height: about-h5(400);
}

.about-h5__value-card-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-h5__value-card-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: about-h5(48) about-h5(40);
  text-align: center;
}

.about-h5__value-icon {
  flex-shrink: 0;
  max-width: none;
  object-fit: contain;
  margin-bottom: about-h5(24);
}

.about-h5__value-title {
  margin: 0 0 about-h5(16);
  font-size: about-h5(40);
  color: #e65616;
  font-weight: 600;
}

.about-h5__value-desc {
  margin: 0;
  font-size: about-h5(28);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
}

.about-h5__reviews {
  position: relative;
  margin: 0 about-h5(-42);
  padding: about-h5(60) about-h5(42);
  overflow: hidden;
}

.about-h5__reviews-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(2px);
  transform: scale(1.05);
}

.about-h5__reviews-overlay {
  position: absolute;
  inset: 0;
  background: rgba(13, 12, 20, 0.88);
}

.about-h5__reviews-content {
  position: relative;
  z-index: 1;
}

.about-h5__reviews-title {
  margin: 0 0 about-h5(24);
  font-size: about-h5(56);
  font-weight: 600;
  line-height: 1.25;
}

.about-h5__reviews-quote {
  display: flex;
  align-items: flex-start;
  gap: about-h5(20);
  margin: 0 0 about-h5(40);
  padding: 0;
  border: none;
}

.about-h5__reviews-quote-text {
  flex: 1;
  min-width: 0;
  margin: 0;
  font-size: about-h5(30);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.8);
  white-space: pre-line;
}

.about-h5__quote-mark {
  flex-shrink: 0;
  width: about-h5(44);
  height: about-h5(34);
  max-width: none;
  object-fit: contain;
}

.about-h5__quote-mark--right {
  display: inline-block;
  margin-left: 2ch;
  vertical-align: baseline;
}

.about-h5__stats {
  display: flex;
  flex-direction: column;
  gap: about-h5(24);
  margin: 0 0 about-h5(40);
  padding: 0;
  list-style: none;
}

.about-h5__stat {
  display: flex;
  align-items: center;
  gap: about-h5(20);

  strong {
    display: block;
    font-size: about-h5(36);
  }

  span {
    font-size: about-h5(26);
    color: #888;
  }
}

.about-h5__stat-icon {
  width: about-h5(60);
  height: about-h5(60);
  flex-shrink: 0;
}

.about-h5__testimonial {
  padding: about-h5(40);
  border-radius: about-h5(24);
  background: linear-gradient(135deg, rgba(230, 86, 22, 0.18), rgba(80, 55, 30, 0.45));
  border: 1px solid rgba(230, 86, 22, 0.25);

  h3 {
    margin: 0 0 about-h5(16);
    font-size: about-h5(36);
    font-weight: 600;
  }

  > p {
    margin: 0 0 about-h5(24);
    font-size: about-h5(28);
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.75);
  }
}

.about-h5__stars {
  display: flex;
  gap: about-h5(8);
  margin-bottom: about-h5(16);
}

.about-h5__star {
  width: about-h5(40);
  height: about-h5(40);
}

.about-h5__testimonial-author {
  display: flex;
  align-items: center;
  gap: about-h5(16);

  img {
    width: about-h5(72);
    height: about-h5(72);
    border-radius: 50%;
    object-fit: cover;
  }
}

.about-h5__author-name {
  margin: 0;
  font-size: about-h5(28);
  font-weight: 600;
}

.about-h5__author-role {
  margin: about-h5(4) 0 0;
  font-size: about-h5(24);
  color: #888;
}

.about-h5__team-head {
  display: flex;
  gap: about-h5(16);
  margin-bottom: about-h5(40);
}

.about-h5__team-line {
  width: about-h5(8);
  height: about-h5(100);
  border-radius: about-h5(4);
  background: linear-gradient(180deg, #e65616, rgba(230, 86, 22, 0.2));
  flex-shrink: 0;
}

.about-h5__team-title {
  margin: about-h5(8) 0 about-h5(4);
  font-size: about-h5(56);
  font-weight: 600;
}

.about-h5__team-sub {
  margin: 0;
  font-size: about-h5(26);
  letter-spacing: 0.15em;
  color: #666;
}

.about-h5__team-list {
  display: flex;
  flex-direction: column;
  gap: about-h5(32);
}

.about-h5__member-card {
  border-radius: about-h5(24);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);

  > img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    display: block;
  }
}

.about-h5__member-photo--alt {
  filter: saturate(0.85) brightness(0.95);
}

.about-h5__member-info {
  padding: about-h5(32);
  text-align: center;

  h3 {
    margin: 0 0 about-h5(8);
    font-size: about-h5(36);
    font-weight: 600;
  }

  > p {
    margin: 0 0 about-h5(24);
    font-size: about-h5(28);
    color: #e65616;
  }
}

.about-h5__member-social {
  display: flex;
  justify-content: center;
  gap: about-h5(24);

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: about-h5(64);
    height: about-h5(64);
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.06);

    img {
      width: about-h5(32);
      height: about-h5(32);
    }
  }
}

.about-h5__promo {
  position: relative;
  border-radius: about-h5(24);
  overflow: hidden;
  min-height: about-h5(600);
}

.about-h5__promo-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 70% center;
}

.about-h5__promo-content {
  position: relative;
  z-index: 1;
  padding: about-h5(48) about-h5(40);
  background: linear-gradient(90deg, rgba(13, 12, 20, 0.95) 0%, rgba(13, 12, 20, 0.6) 70%, transparent 100%);
}

.about-h5__promo-tag {
  margin: 0 0 about-h5(12);
  font-size: about-h5(28);
  color: #e65616;
}

.about-h5__promo-content h2 {
  margin: 0 0 about-h5(16);
  font-size: about-h5(56);
  font-weight: 600;
}

.about-h5__promo-desc {
  margin: 0 0 about-h5(32);
  font-size: about-h5(28);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}

.about-h5__promo-btn {
  padding: about-h5(20) about-h5(48);
  font-size: about-h5(30);
  color: #e65616;
  background: transparent;
  border: 1px solid #e65616;
  border-radius: about-h5(12);
}
</style>
