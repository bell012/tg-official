<template>
  <header class="fixed left-0 right-0 top-0 z-50 bg-[#1A1921]">
    <!-- PC -->
    <div
      class="mx-auto hidden h-[110px] w-full items-center justify-between py-[32px] lg:flex px-[20px] xl:px-[60px] 2xl:px-[100px]"
    >
      <router-link
        to="/"
        class="flex items-center min-w-[150px] mr-[40px] xl:mr-[120px] 2xl:mr-[200px]"
      >
        <img :src="logoUrl" alt="TG包网" class="h-[36px] w-auto" />
      </router-link>

      <nav
        class="flex items-center gap-[24px] xl:gap-[40px] 2xl:gap-[58px]"
      >
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="group relative text-base font-[400] whitespace-nowrap"
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

      <div
        class="flex items-center ml-[20px] xl:ml-[40px] 2xl:ml-[80px]"
      >
        <button
          type="button"
          class="flex h-[20px] w-[20px] items-center justify-center mr-[20px] xl:mr-[32px] 2xl:mr-[43px]"
          @click="toggleSearchPanel"
        >
          <Search class="h-5 w-5 text-[#fff] hover:text-[#FFC16F]" />
        </button>

        <button
          type="button"
          class="flex items-center justify-center rounded-[10px] border border-[#FFC16F] h-[46px] py-[10px] font-[600] text-[#FFC16F] hover:bg-[#FFC16F] hover:text-[#0D0C14] whitespace-nowrap min-w-[180px] xl:min-w-[220px] 2xl:min-w-[250px] px-[14px] xl:px-[20px] 2xl:px-[24px] text-sm xl:text-base 2xl:text-xl"
          @click="handleJump"
        >
          联系官方TG：@TGbw88888888
        </button>
      </div>
    </div>

    <!-- H5 -->
    <div class="flex h-[40px] w-full items-center justify-between px-[14px] py-[10px] lg:hidden">
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
          @click="toggleSearchPanel"
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

    <!-- H5 侧边栏 -->
    <transition name="fade">
      <div v-show="mobileOpen" class="mobile-menu fixed inset-0 z-40 flex flex-col lg:hidden">
        <div class="mobile-menu__head">
          <span class="mobile-menu__title">Persona</span>
          <button
            type="button"
            class="mobile-menu__close-btn"
            aria-label="close"
            @click="toggleMobile"
          >
            <Close class="mobile-menu__close-icon" />
          </button>
        </div>

        <nav class="mobile-menu__nav">
          <a
            v-for="item in navItems"
            :key="item.path"
            class="mobile-menu__link"
            :class="{ 'mobile-menu__link--active': isActive(item.path) }"
            @click="goAndClose(item.path)"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="mobile-menu__social">
          <a
            v-for="s in socialItems"
            :key="s.label"
            class="mobile-menu__social-item"
            @click="s.handler"
          >
            <img :src="s.icon" :alt="s.label" class="mobile-menu__social-icon" />
            <span class="mobile-menu__social-label">{{ s.label }}</span>
          </a>
        </div>
      </div>
    </transition>

    <!-- 搜索弹窗 -->
    <transition name="fade">
      <div
        v-show="searchPanelOpen"
        class="fixed inset-0 z-40 px-[14px] pt-[60px] lg:px-6 lg:pt-[142px]"
        style="background: rgba(0, 0, 0, 0.7); backdrop-filter: blur(10px)"
        @click.self="searchPanelOpen = false"
      >
        <form
          class="mx-auto flex h-[40px] max-w-[720px] items-center gap-3 rounded-full border bg-white/20 px-4 lg:h-14 lg:px-5"
          :class="searchQuery.trim() ? 'border-[#FFC16F]' : 'border-white/50 focus-within:border-[#FFC16F]'"
          @submit.prevent="submitSearch"
          @click.stop
        >
          <input
            v-model="searchQuery"
            type="text"
            enterkeyhint="search"
            placeholder="请输入搜索内容"
            class="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:font-normal placeholder:text-[#C2C2C2] lg:text-base"
            :class="searchQuery.trim() ? 'font-semibold lg:text-lg' : ''"
          />
          <button type="submit" class="flex shrink-0 items-center justify-center" aria-label="搜索">
            <Search class="h-5 w-5 text-white" />
          </button>
        </form>

        <!-- 有内容时结果列表：H5 单列，PC 一行两个 -->
        <ul
          v-if="searchResults.length"
          class="scrollbar-none mx-auto mt-5 grid max-h-[calc(100vh-140px)] w-full max-w-[720px] list-none grid-cols-1 gap-0 overflow-y-auto p-0 lg:mt-6 lg:grid-cols-2 lg:gap-x-6 lg:gap-y-6"
        >
          <li v-for="(item, index) in searchResults" :key="item.id" class="min-w-0">
            <router-link
              :to="`/consult/${item.id}`"
              class="group flex gap-3 lg:gap-4"
              @click="searchPanelOpen = false"
            >
              <img
                :src="item.h5Image"
                :alt="item.title"
                class="size-[60px] shrink-0 rounded-[10px] object-cover lg:size-24 lg:rounded-[20px]"
              />
              <div class="min-w-0 flex-1 pt-0.5">
                <p class="line-clamp-2 text-sm font-semibold leading-snug text-white transition-colors group-hover:text-[#FFC16F] lg:text-base">
                  {{ item.title }}
                </p>
                <p class="mt-3 text-xs text-[#C2C2C2] lg:mt-4 lg:text-sm">{{ item.publishedAt }}</p>
              </div>
            </router-link>
            <div
              v-if="index < searchResults.length - 1"
              class="my-4 h-px bg-white/30 lg:hidden"
            />
          </li>
          <li class="hidden lg:block col-span-1 min-w-0 lg:col-span-2">
            <button
              type="button"
              class="group flex w-full items-center justify-center py-4 lg:py-6"
              @click="goSearchMore"
            >
              <span
                class="text-sm font-semibold text-white transition-colors group-hover:text-[#FFC16F] lg:text-base"
              >
                显示更多
              </span>
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { consultAllArticles } from "@/utils/consultArticles";
import logoUrl from "@/static/home/logo.avif";
import logoUrl_h5 from "@/static/home/logo_h5.avif";
import Search from "@/static/home/svg/search.svg?component";
import Menu from "@/static/home/svg/menu.svg?component";
import Telegrim from "@/static/home/svg/Telegrim.svg?component";
import Close from "@/static/home/svg/close.svg?component";
import telegramIcon from "@/static/home/Telegram.avif";
import whatsappIcon from "@/static/home/Whatsapp.avif";
import facebookIcon from "@/static/home/Facebook.avif";
import tiktokIcon from "@/static/home/Tiktok.avif";
import { LINK, openLink } from "@/utils/jumpLink";

interface SocialItem {
  label: string;
  icon: string;
  handler: () => void;
}

const socialItems: SocialItem[] = [
  { label: "Telegram", icon: telegramIcon, handler: () => openLink(LINK.telegram) },
  { label: "Whatsapp", icon: whatsappIcon, handler: () => openLink(LINK.whatsapp) },
  { label: "Facebook", icon: facebookIcon, handler: () => openLink(LINK.facebook) },
  { label: "Tiktok",   icon: tiktokIcon,   handler: () => openLink(LINK.tiktok) },
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
const searchPanelOpen = ref(false);
const searchQuery = ref("");

const searchResults = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  if (!q) return [];
  return consultAllArticles
    .filter((a) => a.title.toLowerCase().includes(q))
    .slice(0, 6);
});

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value;
  if (mobileOpen.value) searchPanelOpen.value = false;
};

const toggleSearchPanel = () => {
  searchPanelOpen.value = !searchPanelOpen.value;
  if (searchPanelOpen.value) mobileOpen.value = false;
};

const submitSearch = () => {
  const q = searchQuery.value.trim();
  if (!q) return;
  searchPanelOpen.value = false;
  router.push({ path: "/search", query: { q } });
};

const goSearchMore = () => submitSearch();
const handleJump = () => {
  openLink(LINK.telegram);
};
const handleTelegrim = () => {
  openLink(LINK.telegram);
}
const goAndClose = (path: string) => {
  mobileOpen.value = false;
  router.push(path);
};
</script>

<style scoped lang="scss">
@use "@/views/serve/serve-h5" as *;

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Figma Frame 58 — 遮罩 #000 70% + blur */
.mobile-menu {
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
}

/* Persona y:222 / close 48×48 @ x:1017 */
.mobile-menu__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: h5(90) h5(60) 0;
}

.mobile-menu__title {
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  font-size: h5(60);
  line-height: 1.4;
  color: #ffffff;
}

.mobile-menu__close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
}

.mobile-menu__close-icon {
  width: h5(48);
  height: h5(48);
  color: #ffffff;
}

/* 导航区 x:60 y:366，项 1005×150，间距 21，圆角 30 */
.mobile-menu__nav {
  display: flex;
  flex-direction: column;
  gap: h5(21);
  margin-top: h5(60);
  padding: 0 h5(60);
}

.mobile-menu__link {
  display: flex;
  height: h5(150);
  align-items: center;
  justify-content: center;
  border-radius: h5(30);
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(0, 0, 0, 0.5);
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 600;
  font-size: h5(48);
  line-height: 1.4;
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;

  &--active {
    color: #ffc16f;
  }
}

/* 社交区 y:1290，图标 105，文案 42 #C2C2C2，列间距 7 */
.mobile-menu__social {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: h5(7);
  padding: h5(90) h5(42) h5(60);
}

.mobile-menu__social-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: h5(21);
  cursor: pointer;
  text-decoration: none;
}

.mobile-menu__social-icon {
  width: h5(105);
  height: h5(105);
}

.mobile-menu__social-label {
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 400;
  font-size: h5(42);
  line-height: 1.4;
  color: #c2c2c2;
  text-align: center;
}
</style>
