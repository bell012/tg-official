<template>
  <footer
    class="relative z-20 bg-[#1A1921] lg:fixed lg:bottom-0 lg:left-0 lg:right-0 lg:z-0"
  >
    <!-- PC -->
    <div
      class="mx-auto hidden h-[590px] w-full flex-col px-[140px] py-[60px] lg:flex"
    >
      <div class="w-full flex flex-col items-center justify-center">
        <img :src="logoUrl" alt="TG包网" class="h-[50px] w-auto" />
        <p class="mt-[25px] text-lg font-[400] text-[#C2C2C2] text-center">
          TG包网专注于包网开发多年，致力于为客户提供全面的定制搭建服务。我们的项目涵盖体育、棋牌、彩票、真人视讯、电竞、电子游戏包网及综合海外包网解决方案
        </p>
        <p class="text-lg font-[400] text-[#C2C2C2] text-center">
          我们的专业团队都能为您提供高效、安全、符合市场需求的服务。选择TG包网，助您在竞争激烈的市场中脱颖而出！
        </p>
      </div>
      <div class="grid grid-cols-4 mt-[60px]">
        <div class="flex-1">
          <h3 class="text-lg font-[600] text-white">Site Menu</h3>
          <ul class="flex flex-col gap-[6px] mt-[15px]">
            <li v-for="item in siteMenuItems" :key="item.label">
              <a
                :href="item.href"
                :target="item.external ? '_blank' : undefined"
                :rel="item.external ? 'noopener noreferrer' : undefined"
                class="text-lg font-[400] text-[#C2C2C2] hover:text-[#FFC16F]"
                @click="onFooterLinkClick($event, item)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <div class="flex-1">
          <h3 class="text-lg font-[600] text-white">Information</h3>
          <ul class="flex flex-col gap-[6px] mt-[15px]">
            <li v-for="item in infoItems" :key="item.label">
              <a
                :href="item.href"
                :target="item.external ? '_blank' : undefined"
                :rel="item.external ? 'noopener noreferrer' : undefined"
                class="text-lg font-[400] text-[#C2C2C2] hover:text-[#FFC16F]"
                @click="onFooterLinkClick($event, item)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <div class="flex-1">
          <h3 class="text-lg font-[600] text-white">Contact us</h3>
          <ul class="flex flex-col gap-[6px] mt-[15px]">
            <li
              v-for="item in contactItems"
              :key="item.label"
              class="text-lg font-[400] text-[#C2C2C2]"
            >
              {{ item.label }}
            </li>
          </ul>
        </div>

        <div class="flex-shrink-0 flex flex-col items-center justify-center">
          <h3 class="text-xl font-[600] text-white">
            Social Icons
          </h3>
          <ul class="flex flex-col gap-[6px] mt-[15px]">
            <li v-for="s in socialItems" :key="s.label">
              <a
                :href="s.href"
                :target="s.external ? '_blank' : undefined"
                :rel="s.external ? 'noopener noreferrer' : undefined"
                class="flex items-center gap-[10px] text-[#C2C2C2] hover:text-[#FFC16F]"
                @click="onFooterLinkClick($event, s)"
              >
                <component :is="s.icon" class="h-[22px] w-[22px]" />
                <span class="text-lg font-[400]">{{ s.label }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-[60px] flex items-center justify-between text-base font-[400] text-[#C2C2C2]"
      >
        <span>版权所有 © TG包网 2018-2026</span>
        <span>Terms &amp; Conditions | Privacy Policy</span>
      </div>
    </div>

    <!-- H5 -->
    <div
      class="block p-[20px] pb-[calc(20px+env(safe-area-inset-bottom,0px))] lg:hidden"
    >
      <div class="flex flex-col items-center">
        <img :src="logoUrl" alt="TG包网" class="h-[24px] w-auto" />
        <p class="mt-[10px] mx-[auto] w-[347px] text-center text-xs font-[400] text-[#C2C2C2]">
          TG包网专注于包网开发多年，致力于为客户提供全面的定制搭建服务。我们的项目涵盖体育、棋牌、彩票、真人视讯、电竞、电子游戏包网及综合海外包网解决方案 我们的专业团队都能为您提供高效、安全、符合市场需求的服务。选择TG包网，助您在竞争激烈的市场中脱颖而出！
        </p>
      </div>

      <div class="mt-[30px] grid grid-cols-1 gap-y-[30px]">
        <div class="flex flex-col items-center justify-center">
          <h3 class="text-base font-[600] text-white mb-[10px]">Site Menu</h3>
          <ul class="flex flex-col items-center justify-center gap-[10px]">
            <li v-for="item in siteMenuItems" :key="item.label">
              <a
                :href="item.href"
                :target="item.external ? '_blank' : undefined"
                :rel="item.external ? 'noopener noreferrer' : undefined"
                class="text-sm font-[400] text-[#C2C2C2]"
                @click="onFooterLinkClick($event, item)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col items-center justify-center">
          <h3 class="text-base font-[600] text-white mb-[10px]">Information</h3>
          <ul class="flex flex-col items-center justify-center gap-[10px]">
            <li v-for="item in infoItems" :key="item.label">
              <a
                :href="item.href"
                :target="item.external ? '_blank' : undefined"
                :rel="item.external ? 'noopener noreferrer' : undefined"
                class="text-sm font-[400] text-[#C2C2C2]"
                @click="onFooterLinkClick($event, item)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col items-center justify-center">
          <h3 class="text-base font-[600] text-white mb-[10px]">Contact us</h3>
          <ul class="flex flex-col items-center justify-center gap-[10px]">
            <li
              v-for="item in contactItems"
              :key="item.label"
              class="text-sm font-[400] text-[#C2C2C2]"
            >
              {{ item.label }}
            </li>
          </ul>
        </div>

        <div class="flex flex-col items-center justify-center">
          <h3 class="text-base font-[600] text-white mb-[20px]">Social Icons</h3>
          <ul class="mx-[auto] w-[347px] grid grid-cols-4 flex-col items-center justify-center gap-[10px]">
            <li v-for="s in socialItems" :key="s.label">
              <a
                :href="s.href"
                :target="s.external ? '_blank' : undefined"
                :rel="s.external ? 'noopener noreferrer' : undefined"
                class="flex flex-col items-center justify-between gap-[7px] text-[#C2C2C2]"
                @click="onFooterLinkClick($event, s)"
              >
                <component :is="s.icon" class="h-[25px] w-[25px]" />
                <span class="text-sm font-[400]">{{ s.label }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-[30px] flex flex-col items-center gap-[30px] text-sm font-[400] text-[#C2C2C2]"
      >
        <span>版权所有 © TG包网 2018-2026</span>
        <span>Terms &amp; Conditions | Privacy Policy</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { markRaw, type Component } from "vue";
import { useRouter } from "vue-router";
import logoUrl from "@/static/home/logo.avif";
import Telegram from "@/static/home/svg/Telegram.svg?skipsvgo";
import Whatsapp from "@/static/home/svg/Whatsapp.svg?skipsvgo";
import Facebook from "@/static/home/svg/facebook.svg?skipsvgo";
import Tiktok from "@/static/home/svg/Tiktok.svg?skipsvgo";
import { LINK } from "@/utils/jumpLink";

interface FooterLinkItem {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSocialItem extends FooterLinkItem {
  icon: Component;
}

interface ContactItem {
  label: string;
}

const router = useRouter();

const onFooterLinkClick = (
  event: MouseEvent,
  item: FooterLinkItem | FooterSocialItem
) => {
  if (item.external) {
    if (!item.href) event.preventDefault();
    return;
  }
  event.preventDefault();
  router.push(item.href);
};

const siteMenuItems: FooterLinkItem[] = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/serve" },
  { label: "About Us", href: "/about" },
  { label: "TGgame", href: LINK.TGgame, external: true },
];

const infoItems: FooterLinkItem[] = [
  { label: "FAQ", href: `/search?q=${encodeURIComponent("我们")}` },
  { label: "Site Map", href: "/consult" },
  { label: "Contact Us", href: "/connect" },
];

const contactItems: ContactItem[] = [
  { label: "Phone: (+63) 168 1688" },
  { label: "Fax: (+63) 168 1688" },
  { label: "Contact us at: TGbw@mail.com" },
];

const socialItems: FooterSocialItem[] = [
  {
    label: "Telegram",
    href: LINK.telegram,
    external: true,
    icon: markRaw(Telegram),
  },
  {
    label: "Whatsapp",
    href: LINK.whatsapp,
    external: true,
    icon: markRaw(Whatsapp),
  },
  {
    label: "Facebook",
    href: LINK.facebook,
    external: true,
    icon: markRaw(Facebook),
  },
  {
    label: "Tiktok",
    href: LINK.tiktok,
    external: true,
    icon: markRaw(Tiktok),
  },
];
</script>

<style scoped lang="scss"></style>
