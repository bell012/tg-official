<template>
  <footer
    class="bg-[#1A1921] md:fixed md:bottom-0 md:left-0 md:right-0 md:z-0"
  >
    <!-- PC -->
    <div
      class="mx-auto hidden h-[590px] w-full flex-col px-[140px] py-[60px] md:flex"
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
                class="cursor-pointer text-lg font-[400] text-[#C2C2C2] hover:text-[#FFC16F]"
                @click="item.handler"
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
                class="cursor-pointer text-lg font-[400] text-[#C2C2C2] hover:text-[#FFC16F]"
                @click="item.handler"
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
                class="flex cursor-pointer items-center gap-[10px] text-[#C2C2C2] hover:text-[#FFC16F]"
                @click="s.handler"
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
    <div class="block p-[20px] md:hidden">
      <div class="flex flex-col items-center">
        <img :src="logoUrl" alt="TG包网" class="h-[24px] w-auto" />
        <p class="mt-[10px] text-center text-xs font-[400] text-[#C2C2C2]">
          TG包网专注于包网开发多年，致力于为客户提供全面的定制搭建服务。我们的项目涵盖体育、棋牌、彩票、真人视讯、电竞、电子游戏包网及综合海外包网解决方案 我们的专业团队都能为您提供高效、安全、符合市场需求的服务。选择TG包网，助您在竞争激烈的市场中脱颖而出！
        </p>
      </div>

      <div class="mt-[30px] grid grid-cols-1 gap-y-[30px]">
        <div class="flex flex-col items-center justify-center">
          <h3 class="text-base font-[600] text-white mb-[10px]">Site Menu</h3>
          <ul class="flex flex-col items-center justify-center gap-[10px]">
            <li v-for="item in siteMenuItems" :key="item.label">
              <a
                class="text-sm font-[400] text-[#C2C2C2] hover:text-[#FFC16F]"
                @click="item.handler"
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
                class="text-sm font-[400] text-[#C2C2C2] hover:text-[#FFC16F]"
                @click="item.handler"
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
          <ul class="w-full grid grid-cols-4 flex-col items-center justify-center gap-[10px]">
            <li v-for="s in socialItems" :key="s.label">
              <a
                class="flex flex-col items-center justify-between gap-[7px] text-[#C2C2C2] hover:text-[#FFC16F]"
                @click="s.handler"
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
import logoUrl from "@/static/home/logo.png";
import Telegram from "@/static/home/svg/Telegram.svg?skipsvgo";
import Whatsapp from "@/static/home/svg/Whatsapp.svg?skipsvgo";
import Facebook from "@/static/home/svg/facebook.svg?skipsvgo";
import Tiktok from "@/static/home/svg/Tiktok.svg?skipsvgo";

interface MenuItem {
  label: string;
  handler: () => void;
}

interface ContactItem {
  label: string;
}

interface SocialItem {
  label: string;
  icon: Component;
  handler: () => void;
}

const siteMenuItems: MenuItem[] = [
  { label: "Home", handler: () => console.log("Home") },
  { label: "Portfolio", handler: () => console.log("Portfolio") },
  { label: "About Us", handler: () => console.log("About Us") },
  { label: "TGgame", handler: () => console.log("TGgame") },
];

const infoItems: MenuItem[] = [
  { label: "FAQ", handler: () => console.log("FAQ") },
  { label: "Site Map", handler: () => console.log("Site Map") },
  { label: "Contact Us", handler: () => console.log("Contact Us") },
];

const contactItems: ContactItem[] = [
  { label: "Phone: (+63) 168 1688" },
  { label: "Fax: (+63) 168 1688" },
  { label: "Contact us at: TGbw@mail.com" },
];

const socialItems: SocialItem[] = [
  {
    label: "Telegram",
    icon: markRaw(Telegram),
    handler: () => console.log("Telegram"),
  },
  {
    label: "Whatsapp",
    icon: markRaw(Whatsapp),
    handler: () => console.log("Whatsapp"),
  },
  {
    label: "Facebook",
    icon: markRaw(Facebook),
    handler: () => console.log("Facebook"),
  },
  {
    label: "Tiktok",
    icon: markRaw(Tiktok),
    handler: () => console.log("Tiktok"),
  },
];
</script>

<style scoped lang="scss"></style>
