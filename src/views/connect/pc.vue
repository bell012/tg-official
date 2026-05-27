<template>
  <div class="connect-pc">
    <section class="connect-pc__hero">
      <div class="connect-pc__hero-title-box">
        <span class="connect-pc__hero-watermark" aria-hidden="true">联系我们</span>
        <h1 class="connect-pc__hero-title">联系我们</h1>
      </div>
      <p class="connect-pc__hero-intro">
        专业包网服务 / 棋牌游戏搭建 / API对接 / 独立后台<br />
        立即联系官方客服获取专属合作方案
      </p>
    </section>

    <section class="connect-pc__cards" aria-label="联系方式">
      <article
        v-for="card in contactCards"
        :key="card.title"
        class="connect-pc__card"
      >
        <img :src="card.icon" alt="" class="connect-pc__card-icon" aria-hidden="true" />
        <h2 class="connect-pc__card-title">{{ card.title }}</h2>
        <p
          v-for="line in card.desc"
          :key="line"
          class="connect-pc__card-desc"
        >
          {{ line }}
        </p>
        <a
          :href="card.href"
          target="_blank"
          rel="noopener noreferrer"
          class="connect-pc__card-action"
        >
          <span>{{ card.action }}</span>
          <img
            :src="card.arrowIcon"
            alt=""
            class="connect-pc__card-arrow"
            aria-hidden="true"
          />
        </a>
      </article>
    </section>

    <section class="connect-pc__cooperate">
      <img :src="cooperateBg" alt="" class="connect-pc__cooperate-bg" aria-hidden="true" />
      <div class="connect-pc__cooperate-body">
        <h2 class="connect-pc__cooperate-title">
          与我们合作<br />打造属于您的<span class="connect-pc__cooperate-title-accent">娱乐平台</span>
        </h2>
        <p class="connect-pc__cooperate-desc">
          无论您是运营方、代理商还是技术团队<br />我们都能为您提供专业的解决方案
        </p>
        <ul class="connect-pc__features">
          <li v-for="feat in features" :key="feat.title">
            <img :src="feat.icon" alt="" aria-hidden="true" />
            <div>
              <strong>{{ feat.title }}</strong>
              <span>{{ feat.desc }}</span>
            </div>
          </li>
        </ul>
        <div class="connect-pc__cooperate-actions">
          <a
            :href="LINK.telegram"
            target="_blank"
            rel="noopener noreferrer"
            class="connect-pc__btn connect-pc__btn--primary"
          >
            <img
              :src="iconTg"
              alt=""
              class="connect-pc__btn-icon"
              aria-hidden="true"
            />
            <span>联系官方客服</span>
          </a>
          <a
            :href="LINK.whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            class="connect-pc__btn connect-pc__btn--ghost"
          >
            <span>商务合作咨询</span>
            <img
              :src="iconArrowRight"
              alt=""
              class="connect-pc__btn-arrow"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import cooperateBg from "@/static/about/bottomBack1.png";
import iconTelegram from "@/static/about/svg/ico5.svg?url";
import iconCooperate from "@/static/about/svg/icon6.svg?url";
import iconService from "@/static/about/svg/icon7.svg?url";
import iconStable from "@/static/about/svg/icon1.svg?url";
import iconTeam from "@/static/about/svg/icon2.svg?url";
import iconFast from "@/static/about/svg/icon3.svg?url";
import iconAdd from "@/static/about/svg/add.svg?url";
import iconArrowRight from "@/static/about/svg/arrowRight.svg?url";
import iconTg from "@/static/about/svg/tg1.svg?url";
import { LINK } from "@/utils/jumpLink";

const contactCards = [
  {
    title: "官方 Telegram",
    desc: ["7x24小时专属客服", "极速响应，高效解决您的问题"],
    action: "@Tg168",
    arrowIcon: iconAdd,
    href: LINK.telegram,
    icon: iconTelegram,
  },
  {
    title: "商务合作",
    desc: ["API接入 / 包网代搭 / 技术支持", "商务合作请联系官方商务"],
    action: "联系商务",
    arrowIcon: iconArrowRight,
    href: LINK.whatsapp,
    icon: iconCooperate,
  },
  {
    title: "在线客服",
    desc: ["专属顾问一对一服务", "为您提供售前售后优质解决方案"],
    action: "@12345678",
    arrowIcon: iconAdd,
    href: LINK.telegram,
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
.connect-pc {
  position: relative;
  margin: 0 auto;
  padding: 0 0 120px;
  color: #fff;
}

/* Hero — 完全沿用关于我们 */
.connect-pc__hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 120px 0 180px;
  text-align: center;
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
  background: linear-gradient(180deg, rgba(194, 194, 194, 1) 14%, rgba(13, 12, 20, 1) 84%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0.1;
  pointer-events: none;
  user-select: none;
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
  
  font-weight: 600;
  font-size: 100px;
  line-height: 1;
  color: #fff;
  white-space: nowrap;
}

.connect-pc__hero-intro {
  max-width: 680px;
  margin: 20px 0 0;
  font-size: 20px;
  line-height: 1.6;
  color: #c2c2c2;
}

/* 卡片区 */
.connect-pc__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto 180px;
  padding: 0 32px;
}

.connect-pc__card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 30px 45px;
  border: 1px solid rgba(255, 193, 111, 0.18);
  border-radius: 20px;
  background:
    radial-gradient(78% 70% at 0% 0%, rgba(192, 89, 31, 0.32) 0%, rgba(192, 89, 31, 0) 55%),
    radial-gradient(82% 70% at 100% 100%, rgba(27, 93, 212, 0.26) 0%, rgba(27, 93, 212, 0) 56%),
    #1a1921;
  text-align: center;
  overflow: hidden;
  transition: background 0.25s ease, border-color 0.25s ease;

  &:hover {
    background: url("@/static/about/hoverBack.png") center / cover no-repeat;
    border-color: rgba(255, 193, 111, 0.35);
  }

  &:hover .connect-pc__card-action {
    background: #ffc16f;
    border-color: #ffc16f;
    color: #0d0c14;
  }

  &:hover .connect-pc__card-arrow {
    filter: brightness(0);
  }
}

.connect-pc__card-icon {
  width: 96px;
  height: 96px;
  object-fit: contain;
  margin-bottom: 10px;
}

.connect-pc__card-title {
  margin: 0 0 14px;
  
  font-size: 30px;
  font-weight: 600;
  line-height: 1.2;
  color: #fff;
}

.connect-pc__card-desc {
  margin: 0;
  
  font-size: 16px;
  font-weight: 400;
  line-height: 1.55;
  color: #c2c2c2;
}

.connect-pc__card-desc + .connect-pc__card-desc {
  margin-top: 2px;
}

.connect-pc__card-action {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 240px;
  margin: 26px auto 0;
  padding: 15px 42px;
  height: 42px;
  border: 1px solid rgba(255, 193, 111, 0.7);
  border-radius: 6px;
  color: #ffc16f;
  
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}

.connect-pc__card-action > span {
  text-align: center;
}

.connect-pc__card-arrow {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  display: block;
  width: 16px;
  height: 16px;
  object-fit: contain;
}

.connect-pc__btn-arrow {
  display: block;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  object-fit: contain;
}

/* 合作横幅 */
.connect-pc__cooperate {
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
}

.connect-pc__cooperate-bg {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 20px;
  pointer-events: none;
}

.connect-pc__cooperate-body {
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(160px + 36%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 56px 0 0;
}

.connect-pc__cooperate-title {
  margin: 0 0 18px;
  
  font-size: 50px;
  font-weight: 600;
  line-height: 1.25;
  color: #fff;
}

.connect-pc__cooperate-title-accent {
  color: #ffc16f;
}

.connect-pc__cooperate-desc {
  margin: 0 0 24px;
  
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
  color: #c2c2c2;
}

.connect-pc__features {
  display: flex;
  align-items: center;
  gap: 60px;
  margin: 0 0 28px;
  padding: 0;
  list-style: none;
}

.connect-pc__features li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.connect-pc__features img {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.connect-pc__features strong {
  display: block;
  font-size: 30px;
  font-weight: 600;
  color: #fff;
}

.connect-pc__features span {
  display: block;
  font-size: 20px;
  font-weight: 400;
  color: #c2c2c2;
}

.connect-pc__cooperate-actions {
  display: flex;
  align-items: center;
  gap: 42px;
  span{
    font-size: 20px;
  }
}

.connect-pc__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 44px;
  padding: 10px 66px;
  border-radius: 6px;
  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition: filter 0.2s, background 0.2s;
}

.connect-pc__btn-icon {
  display: block;
  width: 22px;
  height: 19px;
  flex-shrink: 0;
  object-fit: contain;
}

.connect-pc__btn--primary {
  background: #ffc16f;
  color: #0d0c14;

  &:hover {
    filter: brightness(1.05);
  }
}

.connect-pc__btn--ghost {
  border: 1px solid rgba(255, 193, 111, 0.7);
  background: transparent;
  color: #ffc16f;

  &:hover {
    background: rgba(255, 193, 111, 0.1);
  }
}

@media (max-width: 1100px) {
  .connect-pc__cooperate-body {
    left: calc(32px + 38%);
    // padding-right: 32px;
  }
  .connect-pc__features {
    gap: 24px;
  }
}
</style>
