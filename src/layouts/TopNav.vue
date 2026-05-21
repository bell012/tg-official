<template>
  <header
    class="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-[#1a1620]/95 backdrop-blur"
  >
    <!-- PC -->
    <div
      class="mx-auto hidden h-[72px] max-w-[1440px] items-center justify-between px-8 md:flex"
    >
      <router-link to="/" class="flex items-center gap-2">
        <img :src="logoUrl" alt="TG包网" class="h-8 w-auto" />
      </router-link>

      <nav class="flex items-center gap-10">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="relative py-2 text-sm transition-colors"
          :class="
            isActive(item.path)
              ? 'font-medium text-white'
              : 'text-white/70 hover:text-white'
          "
        >
          {{ item.label }}
          <span
            v-if="isActive(item.path)"
            class="absolute -bottom-1 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded bg-[#e0b674]"
          />
        </router-link>
      </nav>

      <div class="flex items-center gap-5">
        <button
          type="button"
          class="flex h-8 w-8 items-center justify-center"
          @click="goSearch"
        >
          <img :src="searchIconUrl" alt="搜索" class="h-5 w-5" />
        </button>
        <button
          type="button"
          class="rounded-md border border-[#e0b674] px-4 py-2 text-sm text-[#e0b674] transition-colors hover:bg-[#e0b674]/10"
        >
          联系官方TG：@Tg168
        </button>
      </div>
    </div>

    <!-- H5 -->
    <div class="flex h-[56px] items-center justify-between px-4 md:hidden">
      <div class="flex items-center">
        <button
          type="button"
          class="flex h-8 w-8 flex-col items-center justify-center gap-1"
          aria-label="menu"
          @click="toggleMobile"
        >
          <span
            class="block h-[2px] w-5 bg-white transition-transform"
            :class="mobileOpen ? 'translate-y-[6px] rotate-45' : ''"
          />
          <span
            class="block h-[2px] w-5 bg-white transition-opacity"
            :class="mobileOpen ? 'opacity-0' : ''"
          />
          <span
            class="block h-[2px] w-5 bg-white transition-transform"
            :class="mobileOpen ? '-translate-y-[6px] -rotate-45' : ''"
          />
        </button>
        <router-link to="/" class="flex items-center gap-2">
          <img :src="logoUrl" alt="TG包网" class="h-7 w-auto" />
        </router-link>
      </div>

      <div class="flex items-center gap-3">
        <button
          type="button"
          class="flex h-8 w-8 items-center justify-center"
          @click="goSearch"
        >
          <img :src="searchIconUrl" alt="搜索" class="h-5 w-5" />
        </button>
      </div>
    </div>

    <!-- H5 下拉菜单 -->
    <transition name="fade">
      <div
        v-show="mobileOpen"
        class="border-t border-white/5 bg-[#1a1620] md:hidden"
      >
        <a
          v-for="(item, idx) in navItems"
          :key="item.path"
          class="block cursor-pointer px-4 py-3 text-sm transition-colors"
          :class="
            activeIndex === idx
              ? 'text-[#e0b674]'
              : 'text-white/80 hover:text-white'
          "
          @click="goAndClose(item.path)"
        >
          {{ item.label }}
        </a>
        <div class="border-t border-white/5 px-4 py-3">
          <button
            type="button"
            class="w-full rounded-md border border-[#e0b674] py-2 text-sm text-[#e0b674]"
          >
            联系官方TG：@Tg168
          </button>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import logoUrl from "@/static/home/logo.png";
import searchIconUrl from "@/static/home/search_icon.png";

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
