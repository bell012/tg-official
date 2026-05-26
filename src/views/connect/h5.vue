<template>
  <div class="connect-h5">
    <section class="connect-h5__hero">
      <div class="connect-h5__title-box">
        <span class="connect-h5__watermark" aria-hidden="true">联系我们</span>
        <h1 class="connect-h5__title">联系我们</h1>
      </div>
      <p class="connect-h5__subtitle">专注 专业 支持 稳定 实力交付</p>
    </section>

    <section class="connect-h5__cards">
      <article v-for="item in contactCards" :key="item.title" class="connect-h5__card">
        <img :src="cardBg" alt="" class="connect-h5__card-bg" aria-hidden="true" />
        <div class="connect-h5__card-icon-wrap">
          <img :src="item.icon" :alt="item.title" class="connect-h5__card-icon" />
        </div>
        <h2 class="connect-h5__card-title">{{ item.title }}</h2>
        <p class="connect-h5__card-desc">{{ item.desc }}</p>
        <a :href="item.href" class="connect-h5__card-btn" target="_blank" rel="noopener noreferrer">
          {{ item.cta }}
        </a>
      </article>
    </section>

    <section class="connect-h5__cooperate">
      <p class="connect-h5__cooperate-label">与我们合作</p>
      <h2 class="connect-h5__cooperate-title">打造属于您的彩娱乐平台</h2>
      <p class="connect-h5__cooperate-desc">
        我们提供成熟稳定的系统与全链路支持，助您快速落地、平稳运营。
      </p>

      <ul class="connect-h5__feature-list">
        <li v-for="item in features" :key="item.title" class="connect-h5__feature-item">
          <img :src="item.icon" :alt="item.title" class="connect-h5__feature-icon" />
          <span>{{ item.title }}</span>
        </li>
      </ul>

      <div class="connect-h5__action-row">
        <a class="connect-h5__ghost-btn" href="https://t.me/tg168" target="_blank" rel="noopener noreferrer">
          <img :src="iconTg" alt="" aria-hidden="true" />
          <span>联系官方TG</span>
        </a>
        <a class="connect-h5__ghost-btn" href="https://t.me/tg168" target="_blank" rel="noopener noreferrer">
          <img :src="iconKefu" alt="" aria-hidden="true" />
          <span>商务合作咨询</span>
        </a>
      </div>
    </section>

    <section class="connect-h5__banner">
      <img :src="bottomBanner" alt="商务合作展示" />
    </section>
  </div>
</template>

<script setup lang="ts">
import cardBg from "@/static/about/Group2.png";
import bottomBanner from "@/static/about/Frame 18.png";
import icon1 from "@/static/about/svg/icon1.svg?url";
import icon2 from "@/static/about/svg/icon2.svg?url";
import icon3 from "@/static/about/svg/icon3.svg?url";
import icon4 from "@/static/about/svg/icon4.svg?url";
import icon6 from "@/static/about/svg/icon6.svg?url";
import icon7 from "@/static/about/svg/icon7.svg?url";
import iconKefu from "@/static/about/svg/kefu.svg?url";
import iconTg from "@/static/about/svg/tg.svg?url";
import iconTgCircle from "@/static/about/svg/tgIcon.svg?url";

const contactCards = [
  {
    title: "Telegram",
    desc: "7x24小时在线服务，快速对接项目需求",
    cta: "联系官方客服",
    icon: iconTgCircle,
    href: "https://t.me/tg168",
  },
  {
    title: "商务合作",
    desc: "产品接入、渠道合作、项目咨询一站式支持",
    cta: "联系官方客服",
    icon: icon4,
    href: "https://t.me/tg168",
  },
  {
    title: "客户服务",
    desc: "售后反馈、系统维护、问题处理高效响应",
    cta: "联系客服",
    icon: icon7,
    href: "https://t.me/tg168",
  },
] as const;

const features = [
  { title: "全流程搭建", icon: icon1 },
  { title: "专业技术支持", icon: icon2 },
  { title: "高效运营方案", icon: icon3 },
  { title: "专属售后团队", icon: icon6 },
] as const;
</script>

<style scoped lang="scss">
@use "../serve/serve-h5" as *;

.connect-h5 {
  width: 100%;
  padding: h5(36) h5(42) h5(80);
  color: #fff;
}

.connect-h5__hero {
  text-align: center;
  margin-bottom: h5(28);
}

.connect-h5__title-box {
  position: relative;
  width: h5(540);
  height: h5(176);
  margin: 0 auto;
}

.connect-h5__watermark {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: MiSans, "PingFang SC", sans-serif;
  font-weight: 700;
  font-size: h5(130);
  line-height: 1;
  background: linear-gradient(180deg, #c2c2c2 14%, #0d0c14 84%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  opacity: 0.12;
}

.connect-h5__title {
  position: absolute;
  left: 0;
  right: 0;
  top: h5(58);
  margin: 0;
  font-size: h5(74);
  font-weight: 600;
  line-height: 1;
}

.connect-h5__subtitle {
  margin: h5(8) 0 0;
  font-size: h5(24);
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.72);
}

.connect-h5__cards {
  display: flex;
  flex-direction: column;
  gap: h5(20);
}

.connect-h5__card {
  position: relative;
  overflow: hidden;
  border-radius: h5(22);
  border: 1px solid rgba(255, 193, 111, 0.2);
  padding: h5(24) h5(22) h5(26);
  text-align: center;
  background: #11111a;
}

.connect-h5__card-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.55;
  pointer-events: none;
}

.connect-h5__card-icon-wrap {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: h5(118);
  height: h5(118);
  margin: 0 auto h5(12);
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(255, 193, 111, 0.25), rgba(255, 193, 111, 0.06));
  border: 1px solid rgba(255, 193, 111, 0.35);
}

.connect-h5__card-icon {
  width: h5(48);
  height: h5(48);
}

.connect-h5__card-title {
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: h5(40);
  font-weight: 600;
}

.connect-h5__card-desc {
  position: relative;
  z-index: 1;
  margin: h5(8) 0 h5(16);
  font-size: h5(21);
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.72);
}

.connect-h5__card-btn {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: h5(74);
  border-radius: h5(12);
  background: #ffc16f;
  color: #0d0c14;
  text-decoration: none;
  font-size: h5(30);
  font-weight: 600;
}

.connect-h5__cooperate {
  margin-top: h5(30);
  padding: h5(36) h5(24) h5(28);
  border-radius: h5(20);
  border: 1px solid rgba(255, 193, 111, 0.2);
  background: rgba(16, 16, 24, 0.9);
}

.connect-h5__cooperate-label {
  margin: 0;
  text-align: center;
  font-size: h5(28);
  color: #ffc16f;
  font-weight: 600;
}

.connect-h5__cooperate-title {
  margin: h5(8) 0;
  text-align: center;
  font-size: h5(52);
  line-height: 1.25;
  font-weight: 700;
}

.connect-h5__cooperate-desc {
  margin: 0 auto;
  max-width: h5(860);
  text-align: center;
  font-size: h5(23);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
}

.connect-h5__feature-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: h5(12);
  margin: h5(20) 0 h5(24);
  padding: 0;
  list-style: none;
}

.connect-h5__feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: h5(8);
  text-align: center;
  font-size: h5(20);
  color: #fff;

  span {
    line-height: 1.35;
  }
}

.connect-h5__feature-icon {
  width: h5(58);
  height: h5(58);
}

.connect-h5__action-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: h5(14);
}

.connect-h5__ghost-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: h5(8);
  height: h5(72);
  border-radius: h5(12);
  border: 1px solid #ffc16f;
  color: #ffc16f;
  text-decoration: none;
  font-size: h5(24);
  font-weight: 600;

  img {
    width: h5(28);
    height: h5(28);
  }
}

.connect-h5__banner {
  margin-top: h5(22);
  border-radius: h5(14);
  overflow: hidden;
  border: 1px solid rgba(255, 193, 111, 0.18);

  img {
    display: block;
    width: 100%;
    height: auto;
  }
}
</style>
