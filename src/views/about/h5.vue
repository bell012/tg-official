<template>
  <div class="about-h5">

    <section class="about-h5__group">
      <div class="about-h5__group-content">
        
        <h2 class="about-h5__group-title">
          
          <span>{{ groupIntro.title }}</span>
          
          <img :src="introDivider" alt="" aria-hidden="true" />
        </h2>
        <p class="about-h5__group-label">{{ groupIntro.label }}</p>
        <p class="about-h5__group-brand">{{ groupIntro.brand }}</p>
        <p class="about-h5__group-desc">{{ groupIntro.body }}</p>
      </div>
      <img :src="introImage" alt="集团总部夜景" class="about-h5__group-image" />
    </section>

    <section class="about-h5__values">
      
      <h2 class="about-h5__values-title">
        <span>{{ coreValuesSection.title }}</span>
        <img :src="introDivider" alt="" aria-hidden="true" />
      </h2>
      <p class="about-h5__values-label">{{ coreValuesSection.label }}</p>
      <p class="about-h5__values-subtitle">{{ coreValuesSection.subtitle }}</p>

      <div class="about-h5__value-list">
        <article v-for="item in coreValues" :key="item.title" class="about-h5__value-card">
          <img :src="valueCardBg" alt="" class="about-h5__value-card-bg" aria-hidden="true" />
          <img
            :src="valueCardHoverBg"
            alt=""
            class="about-h5__value-card-bg about-h5__value-card-bg--hover"
            aria-hidden="true"
          />
          <div class="about-h5__value-content">
            <img :src="item.icon" :alt="item.title" class="about-h5__value-icon" />
            <h3 class="about-h5__value-title">{{ item.title }}</h3>
            <p class="about-h5__value-desc">{{ item.desc }}</p>
            <p class="about-h5__value-desc">{{ item.desc2 }}</p>
          </div>
        </article>
      </div>
    </section>

    <section class="about-h5__reviews">
      <img :src="reviewsBg" alt="" class="about-h5__reviews-bg" aria-hidden="true" />
      <div class="about-h5__reviews-mask" aria-hidden="true" />
      <div class="about-h5__reviews-inner">
        <p class="about-h5__reviews-label">客户评价</p>
        <h2 class="about-h5__reviews-title">
          客户满意<br />
          成就我们
        </h2>
        <blockquote class="about-h5__reviews-quote">
          <img :src="quoteLeft" alt="" aria-hidden="true" />
          <p>{{ reviewsQuote }}</p>
          <img :src="quoteRight" alt="" aria-hidden="true" />
        </blockquote>

        <ul class="about-h5__stats">
          <li v-for="stat in reviewStats" :key="stat.label" class="about-h5__stat">
            <img :src="statIconMap[stat.icon]" alt="" aria-hidden="true" />
            <div>
              <strong>{{ stat.value }}</strong>
              <span>{{ stat.label }}</span>
            </div>
          </li>
        </ul>

        <article class="about-h5__testimonial">
          <div class="about-h5__stars" aria-label="五星好评">
            <img v-for="n in 5" :key="n" :src="starIcon" alt="" />
          </div>
          <h3>{{ testimonial.title }}</h3>
          <p>{{ testimonial.body }}</p>
          <footer>
            <img :src="founderPhoto" :alt="testimonial.name" />
            <div>
              <strong>{{ testimonial.name }}</strong>
              <span>{{ testimonial.role }}</span>
            </div>
          </footer>
        </article>
      </div>
    </section>

    <section class="about-h5__team">
      <img :src="teamTitleImage" alt="TEAM 我们的团队 OUR TEAM" class="about-h5__team-title-image" />
      <div class="about-h5__member-list">
        <article v-for="member in teamMembers" :key="member.name" class="about-h5__member-card">
          <img :src="member.photo" :alt="member.name" class="about-h5__member-photo" />
          <div class="about-h5__member-info">
            <p class="about-h5__member-name">{{ member.name }}</p>
            <p class="about-h5__member-role">{{ member.role }}</p>
            <div class="about-h5__member-social">
              <a href="https://t.me/tg168" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <img :src="iconTg" alt="" aria-hidden="true" />
              </a>
              <a href="https://wa.me/639999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <img :src="iconWhatsApp" alt="" aria-hidden="true" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img :src="iconFacebook" alt="" aria-hidden="true" />
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="about-h5__promo">
      <img :src="promoBg" alt="" class="about-h5__promo-bg" aria-hidden="true" />
      <div class="about-h5__promo-inner">
        <p class="about-h5__promo-tag">{{ promo.tag }}</p>
        <h2 class="about-h5__promo-title">{{ promo.title }}</h2>
        <p class="about-h5__promo-desc">{{ promo.desc1 }}</p>
        <p class="about-h5__promo-desc">{{ promo.desc2 }}</p>
        <p class="about-h5__promo-desc">{{ promo.desc3 }}</p>
        <button type="button" class="about-h5__promo-btn">{{ promo.cta }}</button>
      </div>
    </section>

    <section class="about-h5__footer">
      <img :src="brandIcon" alt="" class="about-h5__footer-logo" aria-hidden="true" />
      <p class="about-h5__footer-brand">TG包网</p>
      <a href="https://t.me/tg168" target="_blank" rel="noopener noreferrer" class="about-h5__footer-link">
        <span>Telegram</span>
        <span>@tg168</span>
      </a>
      <a href="https://wa.me/639999999999" target="_blank" rel="noopener noreferrer" class="about-h5__footer-link">
        <span>WhatsApp</span>
        <span>+63 999 999 9999</span>
      </a>
      <a href="mailto:TGbw@mail.com" class="about-h5__footer-link">
        <span>Email</span>
        <span>TGbw@mail.com</span>
      </a>
    </section>
  </div>
</template>

<script setup lang="ts">
import introImage from "@/static/about/back.png";
import introDivider from "@/static/about/Group3.png?url";
import valueCardBg from "@/static/about/Group2.png";
import valueCardHoverBg from "@/static/about/hover.png";
import reviewsBg from "@/static/about/evaluateBack.png";
import quoteLeft from "@/static/about/svg/left.svg?url";
import quoteRight from "@/static/about/svg/right.svg?url";
import promoBg from "@/static/about/Frame 18.png";
import brandIcon from "@/static/about/svg/tgIcon.svg?url";
import iconTg from "@/static/about/svg/tg.svg?url";
import iconWhatsApp from "@/static/about/svg/whatsApp.svg?url";
import iconFacebook from "@/static/about/svg/faceBook.svg?url";
import starIcon from "@/static/about/star.svg?url";
import founderPhoto from "@/static/about/founder.png";
import teamTitleImage from "@/static/about/title.png";
import iconUsers from "@/static/about/doubleAvatar.svg?url";
import iconStarStat from "@/static/about/star.svg?url";
import iconTrophy from "@/static/about/trophy.svg?url";
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

const statIconMap: Record<string, string> = {
  users: iconUsers,
  star: iconStarStat,
  trophy: iconTrophy,
};
</script>

<style scoped lang="scss">
@use "../serve/serve-h5" as *;

.about-h5 {
  width: 100%;
  padding: h5(48) h5(75) h5(90);
  color: #fff;
}

.about-h5__lead {
  margin: 0 auto h5(36);
  max-width: h5(900);
  color: #c2c2c2;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: h5(30);
  font-weight: 400;
  line-height: 1.58;
  text-align: center;
}

.about-h5__group {
  margin-bottom: h5(64);
  text-align: center;
}

.about-h5__group-image {
  display: block;
  width: 100%;
  height: auto;
  border-radius: h5(18);
  margin-top: h5(42);
}

.about-h5__group-label {
  margin: 0 0 h5(12);
  color: #ffc16f;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: h5(36);
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
}

.about-h5__group-title {
  position: relative;
  display: inline-flex;
  margin: 0 0 h5(26);
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: h5(66);
  font-weight: 600;
  line-height: 1.1;

  img {
    position: absolute;
    left: h5(3);
    bottom: 0;
    width: h5(230);
    height: h5(10);
  }
}

.about-h5__group-brand {
  margin: 0 0 h5(18);
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: h5(48);
  font-weight: 600;
  line-height: 1.2;
}

.about-h5__group-desc {
  margin: 0 auto;
  max-width: h5(1041);
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: h5(31);
  font-weight: 400;
  line-height: 1.62;
  color: #c2c2c2;
  text-align: left;
}

.about-h5__values {
  margin-bottom: h5(60);
}

.about-h5__values-label {
  margin: 0 0 h5(12);
  color: #ffc16f;
  text-align: center;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: h5(36);
  font-weight: 400;
  line-height: 1.2;
}

.about-h5__values-title {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 0;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: h5(54);
  font-weight: 600;
  line-height: 1.1;

  img {
    position: absolute;
    left: 50%;
    bottom: -3px;
    width: h5(265);
    height: h5(10);
    transform: translateX(-50%);
  }
}

.about-h5__values-subtitle {
  margin: 0 0 h5(32);
  text-align: center;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: h5(27);
  line-height: 1.58;
  color: #c2c2c2;
}

.about-h5__value-list {
  display: flex;
  flex-direction: column;
  gap: h5(24);
}

.about-h5__value-card {
  position: relative;
  overflow: hidden;
  border-radius: h5(16);
  min-height: h5(300);
  border: h5(1) solid rgba(255, 193, 111, 0.12);
  background: #12121b;
}

.about-h5__value-card-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-h5__value-card-bg--hover {
  opacity: 0;
}

.about-h5__value-content {
  position: relative;
  z-index: 1;
  padding: h5(60) h5(42) h5(44);
  text-align: center;
}

.about-h5__value-icon {
  display: block;
  width: h5(180);
  height: h5(180);
  margin: 0 auto h5(14);
}

.about-h5__value-title {
  margin: 0 0 h5(16);
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: h5(36);
  font-weight: 600;
}

.about-h5__value-desc {
  margin: 0;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: h5(24);
  line-height: 1.58;
  color: #c2c2c2;
}

.about-h5__reviews {
  position: relative;
  overflow: hidden;
  margin: 0 h5(-75) h5(70);
  padding: h5(72) h5(75) h5(66);
}

.about-h5__reviews-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.about-h5__reviews-mask {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(13, 12, 20, 0.72), rgba(13, 12, 20, 0.95)),
    linear-gradient(90deg, rgba(13, 12, 20, 0.94), rgba(13, 12, 20, 0.42));
}

.about-h5__reviews-inner {
  position: relative;
  z-index: 1;
}

.about-h5__reviews-label {
  margin: 0 0 h5(16);
  color: #ffc16f;
  font-size: h5(30);
  font-weight: 600;
}

.about-h5__reviews-title {
  margin: 0 0 h5(34);
  font-size: h5(56);
  font-weight: 600;
  line-height: 1.18;
}

.about-h5__reviews-quote {
  display: grid;
  grid-template-columns: h5(38) 1fr h5(38);
  gap: h5(10);
  align-items: start;
  margin: 0 0 h5(34);
  padding: 0;
  border: 0;

  img {
    width: h5(32);
    height: h5(25);
    object-fit: contain;
  }

  p {
    margin: 0;
    color: #c2c2c2;
    font-size: h5(27);
    line-height: 1.6;
    white-space: pre-line;
  }
}

.about-h5__stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: h5(12);
  margin: 0 0 h5(36);
  padding: 0;
  list-style: none;
}

.about-h5__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: h5(6);
  text-align: center;

  img {
    width: h5(50);
    height: h5(50);
  }

  strong {
    display: block;
    color: #ffc16f;
    font-size: h5(25);
    font-weight: 600;
    line-height: 1.25;
  }

  span {
    display: block;
    margin-top: h5(2);
    color: #c2c2c2;
    font-size: h5(21);
    line-height: 1.3;
  }
}

.about-h5__testimonial {
  margin: 0;
  padding: h5(36) h5(34);
  border-radius: h5(24);
  border: h5(1) solid #ffc16f;
  background: rgba(159, 116, 59, 0.58);
  box-shadow: 0 h5(12) h5(30) rgba(0, 0, 0, 0.24);

  h3 {
    margin: h5(16) 0 h5(18);
    font-size: h5(34);
    font-weight: 600;
    line-height: 1.25;
  }

  p {
    margin: 0 0 h5(28);
    color: #f0e5d6;
    font-size: h5(25);
    line-height: 1.55;
  }

  footer {
    display: flex;
    align-items: center;
    gap: h5(12);
  }

  footer > img {
    width: h5(72);
    height: h5(72);
    border-radius: 50%;
    object-fit: cover;
  }

  strong {
    display: block;
    color: #ffc16f;
    font-size: h5(25);
    font-weight: 600;
    line-height: 1.2;
  }

  span {
    display: block;
    margin-top: h5(4);
    color: #f0e5d6;
    font-size: h5(21);
  }
}

.about-h5__stars {
  display: flex;
  gap: h5(4);

  img {
    width: h5(30);
    height: h5(30);
  }
}

.about-h5__team {
  margin-bottom: h5(54);
}

.about-h5__team-title-image {
  display: block;
  width: h5(335);
  height: auto;
  margin: 0 auto h5(36);
}

.about-h5__member-list {
  display: flex;
  flex-direction: column;
  gap: h5(30);
}

.about-h5__member-card {
  border-radius: h5(18);
  overflow: hidden;
  background: rgba(255, 255, 255, 0.04);
  border: h5(1) solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 h5(10) h5(26) rgba(0, 0, 0, 0.24);
}

.about-h5__member-photo {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  height: auto;
  object-fit: cover;
  object-position: top center;
}

.about-h5__member-info {
  padding: h5(26) h5(18) h5(30);
  text-align: center;
}

.about-h5__member-name {
  margin: 0;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: h5(34);
  font-weight: 600;
}

.about-h5__member-role {
  margin: h5(10) 0 h5(24);
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: h5(25);
  color: #ffc16f;
}

.about-h5__member-social {
  display: flex;
  justify-content: center;
  gap: h5(26);

  a {
    display: flex;
    width: h5(58);
    height: h5(58);
  }

  img {
    width: 100%;
    height: 100%;
  }
}

.about-h5__promo {
  position: relative;
  border-radius: h5(16);
  overflow: hidden;
  margin-bottom: h5(54);
  min-height: h5(760);
  border: h5(1) solid rgba(255, 193, 111, 0.2);
}

.about-h5__promo-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center bottom;
}

.about-h5__promo-inner {
  position: relative;
  z-index: 1;
  padding: h5(36) h5(34) h5(430);
}

.about-h5__promo-tag {
  margin: 0;
  color: #ffc16f;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: h5(28);
  font-weight: 600;
}

.about-h5__promo-title {
  margin: h5(12) 0 h5(16);
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: h5(54);
  font-weight: 600;
}

.about-h5__promo-desc {
  margin: 0;
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: h5(25);
  line-height: 1.6;
  color: #c2c2c2;
}

.about-h5__promo-btn {
  margin-top: h5(28);
  width: h5(230);
  height: h5(70);
  border-radius: h5(12);
  border: h5(1) solid #ffc16f;
  color: #ffc16f;
  background: transparent;
  font-size: h5(25);
  font-weight: 600;
}

.about-h5__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: h5(8);
  color: #c2c2c2;
  text-align: center;
}

.about-h5__footer-logo {
  width: h5(62);
  height: h5(62);
}

.about-h5__footer-brand {
  margin: h5(4) 0 h5(8);
  color: #ffc16f;
  font-size: h5(32);
  font-weight: 600;
}

.about-h5__footer-link {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: h5(12) 0;
  border-bottom: h5(1) solid rgba(255, 255, 255, 0.1);
  color: #c2c2c2;
  text-decoration: none;
  font-size: h5(22);
}
</style>