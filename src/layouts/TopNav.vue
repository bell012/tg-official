<template>
  <header class="fixed left-0 right-0 top-0 z-50 bg-[#1A1921]">
    <!-- PC -->
    <div
      class="mx-auto hidden h-[110px] w-full items-center justify-between px-[140px] py-[32px] md:flex"
    >
      <router-link to="/" class="flex items-center mr-[305px] min-w-[150px]">
        <img :src="logoUrl" alt="TG包网" class="h-[36px] w-auto" />
      </router-link>

      <nav class="flex items-center gap-[58px] min-w-[520px]">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="group relative text-base font-[400]"
          :class="
            isActive(item.path)
              ? 'font-[600] text-[#fff]'
              : 'text-[#C2C2C2] hover:text-[#fff]'
          "
        >
          {{ item.label }}

          <span
            class="absolute -bottom-[12px] left-0 h-[2px] w-full rounded bg-[#FFC16F] transition-transform duration-300 origin-left"
            :class="
              isActive(item.path)
                ? 'scale-x-100'
                : 'scale-x-0 group-hover:scale-x-100'
            "
          />
        </router-link>
      </nav>

      <div class="flex items-center ml-[100px]">
        <button
          type="button"
          class="flex h-[20px] w-[20px] items-center justify-center mr-[43px]"
          @click="goSearch"
        >
          <Search class="h-5 w-5 text-[#fff] hover:text-[#FFC16F]" />
        </button>

        <button
          type="button"
          class="flex items-center justify-center rounded-[10px] border border-[#FFC16F] min-w-[250px] h-[46px] py-[10px] px-[24px] text-xl font-[600] text-[#FFC16F] hover:bg-[#e0b674]/10"
          @click="handleJump"
        >
          联系官方TG：@Tg168
        </button>
      </div>
    </div>

    <!-- H5 -->
    <div class="flex h-[40px] w-full items-center justify-between px-[14px] py-[10px] md:hidden">
      <div class="flex items-center">
        <button
          type="button"
          class="flex h-8 w-8 flex-col items-center justify-center gap-1"
          aria-label="menu"
          @click="toggleMobile"
        >
          <Menu class="h-4 w-4" :class="mobileOpen ? 'text-[#FFC16F]' : 'text-[#fff]'" />
        </button>
        <router-link to="/" class="flex items-center gap-[14px]">
          <img :src="logoUrl_h5" alt="TG包网" class="h-[20px] w-auto" />
        </router-link>
      </div>

      <div class="flex items-center gap-[14px]">
        <button
          type="button"
          class="flex h-5 w-5 items-center justify-center"
          @click="goSearch"
        >
          <Search class="h-5 w-5 text-[#C2C2C2]" />
        </button>
        <button
          type="button"
          class="flex h-5 w-5 items-center justify-center"
          @click="handleTelegrim"
        >
          <Telegrim class="h-5 w-5 text-[#C2C2C2]" />
        </button>
      </div>
    </div>

    <!-- H5 全屏弹窗 -->
    <transition name="fade">
      <div
        v-show="mobileOpen"
        class="fixed inset-0 z-40 flex flex-col md:hidden"
        style="background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(10px)"
      >
        <div class="flex items-center justify-between px-[20px] pt-[30px]">
          <span class="text-xl font-[600] text-white">Persona</span>
          <button
            type="button"
            class="flex h-4 w-4 items-center justify-center"
            aria-label="close"
            @click="toggleMobile"
          >
            <Close class="h-4 w-4 text-white" />
          </button>
        </div>

        <div class="mt-[20px] flex flex-col gap-[7px] px-[20px] py-[14px]">
          <a
            v-for="item in navItems"
            :key="item.path"
            class="flex h-[50px] cursor-pointer items-center justify-center rounded-[10px] border border-white/30 bg-black/50 backdrop-blur-[10px] text-base font-[600]"
            :class="isActive(item.path) ? 'text-[#FFC16F]' : 'text-white'"
            @click="goAndClose(item.path)"
          >
            {{ item.label }}
          </a>
        </div>

        <div class="mt-[30px] grid grid-cols-4 gap-[2px] px-[20px]">
          <a
            v-for="s in socialItems"
            :key="s.label"
            class="flex cursor-pointer flex-col items-center gap-[7px]"
            @click="s.handler"
          >
            <img :src="s.icon" :alt="s.label" class="h-[35px] w-[35px]" />
            <span class="text-sm font-[400] text-[#C2C2C2]">{{ s.label }}</span>
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import logoUrl from "@/static/home/logo.png";
import logoUrl_h5 from "@/static/home/logo_h5.png";
import Search from "@/static/home/svg/search.svg?component";
import Menu from "@/static/home/svg/menu.svg?component";
import Telegrim from "@/static/home/svg/Telegrim.svg?component";
import Close from "@/static/home/svg/close.svg?component";
import telegramIcon from "@/static/home/Telegram.png";
import whatsappIcon from "@/static/home/Whatsapp.png";
import facebookIcon from "@/static/home/Facebook.png";
import tiktokIcon from "@/static/home/Tiktok.png";

interface SocialItem {
  label: string;
  icon: string;
  handler: () => void;
}

const socialItems: SocialItem[] = [
  { label: "Telegram", icon: telegramIcon, handler: () => console.log("Telegram") },
  { label: "Whatsapp", icon: whatsappIcon, handler: () => console.log("Whatsapp") },
  { label: "Facebook", icon: facebookIcon, handler: () => console.log("Facebook") },
  { label: "Tiktok",   icon: tiktokIcon,   handler: () => console.log("Tiktok") },
];

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "首页", path: "/" },
  { label: "包网服务", path: "/serve" },
  { label: "包网资讯", path: "/consult" },
  { label: "关于我们", path: "/about" },
  { label: "联系我们", path: "/connect" },
];

const route = useRoute();
const router = useRouter();

const isActive = (path: string) => {
  if (path === "/") return route.path === "/";
  return route.path === path || route.path.startsWith(path + "/");
};

const activeIndex = computed(() => navItems.findIndex((i) => isActive(i.path)));

const mobileOpen = ref(false);
const toggleMobile = () => (mobileOpen.value = !mobileOpen.value);
const goSearch = () => router.push("/search");
const handleJump = () => {
  console.log("联系官方TG");
};
const handleTelegrim = () => {
  console.log("handleTelegrim");
}
const goAndClose = (path: string) => {
  mobileOpen.value = false;
  router.push(path);
};
</script>

<style scoped lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
