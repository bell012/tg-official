<template>
  <div class="about-pc">
    <!-- Hero -->
    <section class="about-pc__hero max-w-[1440px] mx-auto">
      <div class="about-pc__hero-title-box">
        <span class="about-pc__hero-watermark" aria-hidden="true">关于我们</span>
        <h1 class="about-pc__hero-title">关于我们</h1>
      </div>
      <p class="about-pc__hero-intro">{{ aboutHeroIntro }}</p>
    </section>

    <!-- 集团介绍 -->
    <section class="about-pc__intro max-w-[1440px] mx-auto">
      <div class="about-pc__intro-image-wrap">
        <img :src="introImage" alt="集团总部夜景" class="about-pc__intro-image" />
      </div>
      <div class="about-pc__intro-content">
        <span class="about-pc__intro-label">{{ groupIntro.label }}</span>
        <h2 class="about-pc__intro-title">
          <span class="about-pc__intro-title-text">{{ groupIntro.title }}</span>
          <img
            :src="introDivider"
            alt=""
            class="about-pc__intro-line"
            aria-hidden="true"
          />
        </h2>
        <p class="about-pc__intro-brand">{{ groupIntro.brand }}</p>
        <p class="about-pc__intro-body">{{ groupIntro.body }}</p>
      </div>
    </section>

    <!-- 核心价值观 -->
    <section class="about-pc__values max-w-[1440px] mx-auto">
      <div class="about-pc__values-head">
        <span class="about-pc__values-label">{{ coreValuesSection.label }}</span>
        <h2 class="about-pc__values-title">
          <span class="about-pc__values-title-text">{{ coreValuesSection.title }}</span>
          <img
            :src="introDivider"
            alt=""
            class="about-pc__values-line"
            aria-hidden="true"
          />
        </h2>
        <p class="about-pc__values-sub">{{ coreValuesSection.subtitle }}</p>
      </div>
      <div class="about-pc__values-grid">
        <article
          v-for="item in coreValues"
          :key="item.title"
          class="about-pc__value-card"
        >
          <img :src="valueCardBg" alt="" class="about-pc__value-card-bg" aria-hidden="true" />
          <img
            :src="valueCardHoverBg"
            alt=""
            class="about-pc__value-card-bg about-pc__value-card-bg--hover"
            aria-hidden="true"
          />
          <div class="about-pc__value-card-inner">
            <img
              :src="item.icon"
              :alt="item.title"
              class="about-pc__value-icon"
             
            />
            <h3 class="about-pc__value-title">{{ item.title }}</h3>
            <p class="about-pc__value-desc">{{ item.desc }}</p>
            <p class="about-pc__value-desc">{{ item.desc2 }}</p>
          </div>
        </article>
      </div>
    </section>

    <!-- 客户评价 -->
    <section class="about-pc__reviews">
      <img :src="reviewsBg" alt="" class="about-pc__reviews-bg" aria-hidden="true" />
      <div class="about-pc__reviews-overlay" aria-hidden="true" />
      <div class="about-pc__reviews-inner">
        <div class="about-pc__reviews-left">
          <span class="about-pc__label">客户评价</span>
          <h2 class="about-pc__reviews-title">
            客户满意  成就我们
          </h2>
          <blockquote class="about-pc__reviews-quote">
            <img
              :src="quoteLeft"
              alt=""
              class="about-pc__quote-mark about-pc__quote-mark--left"
              aria-hidden="true"
            />
            <p class="about-pc__reviews-quote-text">
              <span class="about-pc__reviews-quote-content">{{ reviewsQuote }}</span>
              <img
                :src="quoteRight"
                alt=""
                class="about-pc__quote-mark about-pc__quote-mark--right"
                aria-hidden="true"
              />
            </p>
          </blockquote>
          <ul class="about-pc__stats">
            <li v-for="stat in reviewStats" :key="stat.label" class="about-pc__stat">
              <component :is="statIconMap[stat.icon]" class="about-pc__stat-icon" aria-hidden="true" />
              <div>
                <strong class="about-pc__stat-value">{{ stat.value }}</strong>
                <span class="about-pc__stat-label">{{ stat.label }}</span>
              </div>
            </li>
          </ul>
        </div>
        <article class="about-pc__testimonial">
          <div class="about-pc__stars" aria-label="五星好评">
            <img v-for="n in 5" :key="n" :src="starIcon" alt="" class="about-pc__star" />
          </div>
          <h3 class="about-pc__testimonial-title">{{ testimonial.title }}</h3>
          <p class="about-pc__testimonial-body">{{ testimonial.body }}</p>
          <footer class="about-pc__testimonial-author">
            <img :src="founderPhoto" :alt="testimonial.name" class="about-pc__author-avatar" />
            <div>
              <p class="about-pc__author-name">{{ testimonial.name }}</p>
              <p class="about-pc__author-role">{{ testimonial.role }}</p>
            </div>
          </footer>
        </article>
      </div>
    </section>

    <!-- 团队 -->
    <section class="about-pc__team max-w-[1440px] mx-auto">
      <header class="about-pc__team-head">
        <img
          :src="teamTitleImage"
          alt="我们的团队"
          class="about-pc__team-title-image"
        />
      </header>
      <div class="about-pc__team-grid">
        <article
          v-for="(member, index) in teamMembers"
          :key="member.name"
          class="about-pc__member-card"
        >
          <img
            :src="member.photo"
            :alt="member.name"
            class="about-pc__member-photo"
            :class="{ 'about-pc__member-photo--alt': index > 0 }"
          />
          <div class="about-pc__member-info">
            <h3 class="about-pc__member-name">{{ member.name }}</h3>
            <p class="about-pc__member-role">{{ member.role }}</p>
            <div class="about-pc__member-social">
              <a href="#" class="about-pc__social-link" aria-label="Telegram">
                <img :src="iconTg" alt="" />
              </a>
              <a href="#" class="about-pc__social-link" aria-label="WhatsApp">
                <img :src="iconWhatsApp" alt="" />
              </a>
              <a href="#" class="about-pc__social-link" aria-label="Facebook">
                <img :src="iconFacebook" alt="" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- 促销横幅 -->
    <section class="about-pc__promo max-w-[1440px] mx-auto">
      <img :src="promoBg" alt="" class="about-pc__promo-bg" aria-hidden="true" />
      <div class="about-pc__promo-inner">
        <div class="about-pc__promo-content">
          <p class="about-pc__promo-tag">{{ promo.tag }}</p>
          <h2 class="about-pc__promo-title">{{ promo.title }}</h2>
          <p class="about-pc__promo-desc">{{ promo.desc1 }}</p>
          <p class="about-pc__promo-desc">{{ promo.desc2 }}</p>
          <p class="about-pc__promo-desc">{{ promo.desc3 }}</p>
          <button type="button" class="about-pc__promo-btn">{{ promo.cta }}</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { Component } from "vue";
import introImage from "@/static/about/back.png";
import introDivider from "@/static/about/Group3.png?url";
import valueCardBg from "@/static/about/Group2.png";
import valueCardHoverBg from "@/static/about/hover.png";
import reviewsBg from "@/static/about/evaluateBack.png";
import quoteLeft from "@/static/about/svg/left.svg?url";
import quoteRight from "@/static/about/svg/right.svg?url";
import promoBg from "@/static/about/bottomBack.png";
import teamTitleImage from "@/static/about/title.png";
import founderPhoto from "@/static/about/founder.png";
import starIcon from "@/static/about/star.svg?url";
import iconTg from "@/static/about/svg/tg.svg?url";
import iconWhatsApp from "@/static/about/svg/whatsApp.svg?url";
import iconFacebook from "@/static/about/svg/faceBook.svg?url";
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
.about-pc {
  position: relative;
  // max-width: 1440px;
  margin: 0 auto;
  padding: 0 0 120px;
  color: #fff;
}

/* Hero */
.about-pc__hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 0 80px;
  text-align: center;
}

.about-pc__hero-title-box {
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 199px;
}

.about-pc__hero-watermark {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: MiSans, "PingFang SC", sans-serif;
  font-weight: 700;
  font-size: 150px;
  line-height: 1;
  background: linear-gradient(180deg, rgba(194, 194, 194, 1) 14%, rgba(13, 12, 20, 1) 84%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0.1;
  pointer-events: none;
  user-select: none;
}

.about-pc__hero-title {
  position: absolute;
  left: 16.67%;
  top: 25.63%;
  width: 66.67%;
  height: 70.35%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "PingFang SC", sans-serif;
  font-weight: 600;
  font-size: 100px;
  line-height: 1;
  color: #fff;
}

.about-pc__hero-intro {
  max-width: 680px;
  margin: 20px 0 0;
  font-size: 20px;
  line-height: 1.6;
  color: #c2c2c2;
}

/* 集团介绍 */
.about-pc__intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
  margin-bottom: 120px;
}

.about-pc__intro-image-wrap {
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
}

.about-pc__intro-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.about-pc__label {
  color: #FFC16F;
  font-family: "PingFang SC";
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 18px;

  &--cn {
    text-transform: none;
    letter-spacing: 0.08em;
    font-size: 16px;
  }
}

.about-pc__intro-label {
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 400;
  
  text-transform: uppercase;
  color: #FFC16F;
}

.about-pc__intro-title {  
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  max-width: 100%;
  margin: 0 0 28px;
  padding: 0;
  font-weight: 600;
}

.about-pc__intro-title-text {

  display: block;
  font-size: 50px;
  line-height: 1;
  color: #ffffff;
}

.about-pc__intro-line {
  position: absolute;
  left: 3px;
  bottom: 0;
  width: 220px;
  max-width: 120%;
  height: 10px;
  object-fit: fill;
  pointer-events: none;
}

.about-pc__intro-brand {
  margin: 0 0 20px;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.3;
  color: #ffffff;
}

.about-pc__intro-body {
  margin: 0;
  font-size: 16px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
}

/* 核心价值观 */
.about-pc__values {
  margin-bottom: 120px;
}

.about-pc__values-head {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 48px;
}

.about-pc__values-label {
  display: block;
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 400;
  
  text-transform: uppercase;
  color: #ffc16f;
}

.about-pc__values-title {
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  max-width: 100%;
  margin: 0 0 24px;
  padding: 0;
  font-weight: 600;
}

.about-pc__values-title-text {
  position: relative;
  z-index: 1;
  display: block;
  font-size: 50px;
  line-height: 1;
  color: #ffffff;
}

.about-pc__values-line {
  position: absolute;
  left: 4px;
  bottom: 0;
  width: 245px;
  z-index: 1;
  height: 10px;
}

.about-pc__values-sub {
  margin: 0;
  max-width: 640px;
  font-size: 16px;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
}

.about-pc__values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.about-pc__value-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  min-height: 280px;
}

.about-pc__value-card-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  transition: opacity 0.25s ease;
}

.about-pc__value-card-bg--hover {
  opacity: 0;
}

.about-pc__value-card:hover .about-pc__value-card-bg--hover {
  opacity: 1;
}

.about-pc__value-card-inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 30px;
  text-align: center;
  height: 100%;
}

.about-pc__value-icon {
  flex-shrink: 0;
  max-width: none;
  object-fit: contain;
  margin-bottom: 20px;
}

.about-pc__value-title {
  margin: 0 0 16px;
  font-size: 24px;
  font-weight: 600;
  color: #FFF;
}

.about-pc__value-desc {
  margin: 0;
  font-size: 14px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
}

/* 客户评价 */
.about-pc__reviews {
  position: relative;
  min-height: 648px;
  padding: 92px 32px 86px;
  overflow: hidden;
  border-radius: 0;
}

.about-pc__reviews-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-pc__reviews-overlay {
  position: absolute;
  inset: 0;
}

.about-pc__reviews-inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 592px;
  gap: 32px;
  align-items: center;
  max-width: 1440px;
  margin: 50px auto 0;
}

.about-pc__reviews-title {
  margin: 20px 0 35px;
  font-size: 60px;
  font-weight: 600;
  line-height: 1.2;
}

.about-pc__reviews-quote {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin: 0 0 34px;
  padding: 0;
  border: none;
}

.about-pc__reviews-quote-text {
  flex: 1;
  min-width: 0;
  margin: 0;
  color: #c2c2c2;
  font-family: "PingFang SC", -apple-system, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;
  white-space: pre-line;
}

.about-pc__reviews-quote-content {
  display: inline;
}

.about-pc__quote-mark {
  flex-shrink: 0;
  width: 22px;
  height: 17px;
  max-width: none;
  object-fit: contain;
}

.about-pc__quote-mark--right {
  display: inline-block;
  vertical-align: baseline;
  margin-left: 2ch;
  transform: translateY(-1px);
}

.about-pc__stats {
  display: flex;
  gap: 40px;
  margin: 0;
  padding: 0;
  list-style: none;
}

.about-pc__stat {
  display: flex;
  align-items: center;
  gap: 12px;
  
}

.about-pc__stat-icon {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  color: #FFC16F;
}

.about-pc__stat-value {
  color: #FFC16F;
  font-family: "PingFang SC";
  font-size: 18px;
  
  font-weight: 600;
  
  text-transform: capitalize;
}

.about-pc__stat-label {
  display: block;
  color: #C2C2C2;
  font-family: "PingFang SC";
  font-size: 18px;
  
  font-weight: 400;
  
  margin-top: 2px;
}

.about-pc__testimonial {
  width: 592px;
  
  justify-self: start;
  margin-bottom: 8px;
  padding: 48px;
  border-radius: 30px;
  border: 1px solid #FFC16F;
  background: rgba(159, 116, 59, 0.50);
}

.about-pc__stars {
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
}

.about-pc__star {
  width: 24px;
  height: 24px;
}

.about-pc__testimonial-title {
  margin: 0 0 24px;
  font-size: 30px;
  
  font-weight: 600;
}

.about-pc__testimonial-body {
  margin: 0 0 24px;
  color: #C2C2C2;
  font-family: "PingFang SC";
  font-size: 18px;
  
  font-weight: 400;
  
}

.about-pc__testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.about-pc__author-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.about-pc__author-name {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #FFC16F;
  font-family: "PingFang SC";
  font-weight: 600;
  
}

.about-pc__author-role {
  margin: 4px 0 0;
  color: #C2C2C2;
font-family: "PingFang SC";
font-size: 18px;
font-weight: 400;

}

/* 团队 */
.about-pc__team {
  margin-top: 140px;
  margin-bottom: 120px;
}

.about-pc__team-head {
  margin-bottom: 48px;
}

.about-pc__team-title-image {
  display: block;
  width: 428px;
  max-width: 100%;
  height: auto;
}

.about-pc__team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.about-pc__member-card {
  border-radius: 16px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.about-pc__member-photo {
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  display: block;
  background: #1a1a22;

  &--alt {
    filter: saturate(0.85) brightness(0.95);
    object-position: top center;
  }
}

.about-pc__member-info {
  padding: 24px;
  text-align: center;
}

.about-pc__member-name {
text-align: center;
font-family: "PingFang SC";
font-size: 30px;
font-style: normal;
font-weight: 600;
line-height: normal;
text-transform: capitalize;
}

.about-pc__member-role {
  color: var(---, #FFC16F);
text-align: center;
font-family: "PingFang SC";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: capitalize;
margin-top: 10px;
margin-bottom: 30px;
}

.about-pc__member-social {
  display: flex;
  justify-content: center;
  gap: 24px;
}

.about-pc__social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  &:hover {
    background: rgba(255, 193, 111, 0.15);
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
  }
}

/* 促销 */
.about-pc__promo {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  min-height: 320px;
}

.about-pc__promo-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center right;
}

.about-pc__promo-inner {
  height: 500px;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  min-height: 320px;
  padding: 0 100px;
}

.about-pc__promo-content {
  max-width: 560px;
}

.about-pc__promo-tag {
  color: #FFC16F;
  font-family: "PingFang SC";
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
}

.about-pc__promo-title {
  color: #FFF;
  font-family: "PingFang SC";
  font-size: 50px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 4px;
  text-transform: capitalize;
}

.about-pc__promo-desc {
  color: #C2C2C2;
  font-family: "PingFang SC";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;

}

.about-pc__promo-btn {
  margin-top: 32px;
  padding: 12px 32px;
  font-size: 16px;
  color: #ffc16f;
  background: transparent;
  border: 1px solid #ffc16f;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: rgba(255, 193, 111, 0.12);
  }
}
</style>
