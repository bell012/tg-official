<template>
  <div class="connect-h5">
    <section class="connect-h5__hero">
      <div class="connect-h5__hero-title-box">
        <span class="connect-h5__hero-watermark" aria-hidden="true">联系我们</span>
        <h1 class="connect-h5__hero-title">联系我们</h1>
      </div>
      <p class="connect-h5__hero-intro">
        专业包网服务 / 棋牌游戏搭建 / API对接 / 独立后台<br />
        立即联系官方客服获取专属合作方案
      </p>
    </section>

    <section class="connect-h5__cards" aria-label="联系方式">
      <article
        v-for="card in contactCards"
        :key="card.title"
        class="connect-h5__card"
      >
        <img :src="card.icon" alt="" class="connect-h5__card-icon" aria-hidden="true" />
        <h2 class="connect-h5__card-title">{{ card.title }}</h2>
        <div class="whitespace-nowrap">
          <span
            v-for="line in card.desc"
            :key="line"
            class="connect-h5__card-desc"
          >
            {{ line }}
          </span>
        </div>
        <a
          :href="card.href"
          target="_blank"
          rel="noopener noreferrer"
          class="connect-h5__card-action"
        >
          <span>{{ card.action }}</span>
          <img
            :src="card.arrowIcon"
            alt=""
            class="connect-h5__card-arrow"
            aria-hidden="true"
          />
        </a>
      </article>
    </section>

    <section class="connect-h5__cooperate">
      <img
        :src="serviceImage"
        alt=""
        class="connect-h5__cooperate-bg"
        aria-hidden="true"
      />
      <div class="connect-h5__cooperate-body">
        <h2 class="connect-h5__cooperate-title">
          与我们合作<br />打造属于您的<span class="connect-h5__cooperate-title-accent">娱乐平台</span>
        </h2>
        <p class="connect-h5__cooperate-desc">
          无论您是运营方、代理商还是技术团队，我们都能为您提供最专业的解决方案
        </p>
        <ul class="connect-h5__features">
          <li v-for="feat in features" :key="feat.title">
            <img :src="feat.icon" alt="" aria-hidden="true" />
            <strong>{{ feat.title }}</strong>
            <span>{{ feat.desc }}</span>
          </li>
        </ul>
        <div class="connect-h5__cooperate-actions">
          <a
            :href="LINK.telegram"
            target="_blank"
            rel="noopener noreferrer"
            class="connect-h5__btn connect-h5__btn--primary"
          >
            <img
              :src="iconTg"
              alt=""
              class="connect-h5__btn-icon"
              aria-hidden="true"
            />
            <span>联系官方客服</span>
          </a>
          <a
            :href="LINK.whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            class="connect-h5__btn connect-h5__btn--primary"
          >
            <img
              :src="iconKefu"
              alt=""
              class="connect-h5__btn-icon connect-h5__btn-icon--kefu"
              aria-hidden="true"
            />
            <span>商务合作咨询</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import serviceImage from "@/static/about/Frame18.avif";
import iconTelegram from "@/static/about/svg/icon5.svg?url";
import iconCooperate from "@/static/about/svg/icon6.svg?url";
import iconService from "@/static/about/svg/icon7.svg?url";
import iconStable from "@/static/about/svg/icon1.svg?url";
import iconTeam from "@/static/about/svg/icon2.svg?url";
import iconFast from "@/static/about/svg/icon3.svg?url";
import iconAdd from "@/static/about/svg/add.svg?url";
import iconArrowRight from "@/static/about/svg/arrowRight.svg?url";
import iconTg from "@/static/about/svg/tg1.svg?url";
import iconKefu from "@/static/about/svg/kefu.svg?url";
import { LINK } from "@/utils/jumpLink";

const contactCards = [
  {
    title: "官方 Telegram",
    desc: ["7x24小时专属客服", "极速响应，高效解决您的问题"],
    action: "联系官方商务",
    arrowIcon: iconAdd,
    href: LINK.telegram,
    icon: iconTelegram,
  },
  {
    title: "商务合作",
    desc: ["API接入 / 包网代搭 / 技术支持", "商务合作请联系官方商务"],
    action: "联系官方商务",
    arrowIcon: iconArrowRight,
    href: LINK.whatsapp,
    icon: iconCooperate,
  },
  {
    title: "在线客服",
    desc: ["专属顾问一对一服务", "为您提供售前售后优质解决方案"],
    action: "联系WhatsApp",
    arrowIcon: iconAdd,
    href: LINK.whatsapp,
    icon: iconService,
  },
];

const features = [
  { title: "安全稳定", desc: "多重安全防护", icon: iconStable },
  { title: "专业团队", desc: "技术实力保障", icon: iconTeam },
  { title: "快速响应", desc: "7x24小时服务", icon: iconFast },
];
</script>

<style scoped lang="scss">
@use "../serve/serve-h5" as *;

.connect-h5 {
  width: 100%;
  padding: h5(60) h5(42) h5(120);
  color: #fff;
}

/* Hero — 沿用关于我们 H5 同款字号比例 */
.connect-h5__hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: h5(48) 0 h5(40);
}

.connect-h5__hero-title-box {
  position: relative;
  width: 100%;
  max-width: h5(600);
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
  white-space: nowrap;
  background: linear-gradient(180deg, rgba(194, 194, 194, 1) 14%, rgba(13, 12, 20, 1) 84%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0.1;
  pointer-events: none;
  user-select: none;
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
  
  font-weight: 600;
  font-size: h5(100);
  line-height: 1;
  color: #fff;
  white-space: nowrap;
}

.connect-h5__hero-intro {
  margin: h5(20) 0 0;
  max-width: h5(930);
  
  font-size: h5(30);
  font-weight: 400;
  line-height: 1.58;
  color: #c2c2c2;
}

/* 卡片 */
.connect-h5__cards {
  display: flex;
  flex-direction: column;
  gap: h5(30);
  margin: 0 0 h5(60);
}

.connect-h5__card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: h5(60) 0;
  border: h5(1) solid #6F502A;
  border-radius: h5(24);
  background: url("@/static/about/h5Back.avif") center / cover no-repeat #1a1921;
  text-align: center;
  overflow: hidden;
}

.connect-h5__card-icon {
  width: h5(180);
  height: h5(180);
  object-fit: contain;
  margin-bottom: h5(18);
}

.connect-h5__card-title {
  margin: 0 0;
  
  font-size: h5(48);
  font-weight: 600;
  color: #fff;
}

.connect-h5__card-desc {
  margin: 0;
  
  font-size: h5(33);
  font-weight: 400;
  color: #c2c2c2;
}

.connect-h5__card-desc + .connect-h5__card-desc {
  margin-top: h5(4);
}

.connect-h5__card-action {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: h5(600);
  height: h5(96);
  margin: h5(50) auto 0;
  padding:  h5(23);
  border-radius: h5(21);
  color: #0D0C14;
  
  font-size: h5(42);
  font-weight: 600;
  text-decoration: none;
  background-color: #FFC16F;
}

.connect-h5__card-action > span {
  text-align: center;
}

.connect-h5__card-arrow {
  position: absolute;
  right: h5(36);
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: h5(34);
  height: h5(34);
  object-fit: contain;
}

/* 合作横幅 */
.connect-h5__cooperate {
  position: relative;
  overflow: hidden;
  border: h5(1) solid rgba(255, 193, 111, 0.22);
  border-radius: h5(24);
}

.connect-h5__cooperate-bg {
  display: block;
  width: 100%;
  height: auto;
  pointer-events: none;
}

.connect-h5__cooperate-body {
  position: absolute;
  inset: 0;
  padding: h5(56) h5(48) h5(60);
  text-align: center;
  z-index: 1;
}

.connect-h5__cooperate-title {
  margin: 0 0 h5(36);
  
  font-size: h5(60);
  font-weight: 600;
  line-height: 1.3;
  color: #fff;
}

.connect-h5__cooperate-title-accent {
  color: #ffc16f;
}

.connect-h5__cooperate-desc {
  margin: 0 auto h5(54);
  padding: 0 h5(42);
  max-width: h5(820);
  
  font-size: h5(33);
  font-weight: 400;
  line-height: 1.6;
  color: #c2c2c2;
}

.connect-h5__features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: h5(20);
  margin: 0 0 h5(56);
  padding: 0;
  list-style: none;
}

.connect-h5__features li {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: h5(8);
}

.connect-h5__features li > img {
  display: block;
  width: h5(105);
  height: h5(105);
  object-fit: contain;
  flex-shrink: 0;
}

.connect-h5__features strong {
  display: block;
  
  font-size: h5(36);
  font-weight: 600;
  line-height: 1.2;
  color: #fff;
}

.connect-h5__features span {
  display: block;
  
  font-size: h5(30);
  font-weight: 400;
  line-height: 1.2;
  color: #c2c2c2;
}

.connect-h5__cooperate-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: h5(24);
}

.connect-h5__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: h5(14);
  height: h5(108);
  border-radius: h5(21);
  
  font-size: h5(42);
  font-weight: 600;
  text-decoration: none;
}

.connect-h5__btn-icon {
  display: block;
  width: h5(44);
  height: h5(38);
  flex-shrink: 0;
  object-fit: contain;
}

.connect-h5__btn-icon--kefu {
  width: h5(48);
  height: h5(48);
}

.connect-h5__btn--primary {
  background: #ffc16f;
  color: #0d0c14;
}

</style>
