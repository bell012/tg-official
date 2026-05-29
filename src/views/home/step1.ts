import { ref, onMounted, onBeforeUnmount } from "vue";
import card1Pc from "@/static/home/step_1_1_pc.png";
import card2Pc from "@/static/home/step_1_2_pc.png";
import card3Pc from "@/static/home/step_1_3_pc.png";
import stat1Pc from "@/static/home/step_1_4_pc.png";
import stat2Pc from "@/static/home/step_1_5_pc.png";
import stat3Pc from "@/static/home/step_1_6_pc.png";
import stat4Pc from "@/static/home/step_1_7_pc.png";
import cardBgDefaultPc from "@/static/home/step_1_default_pc.png";
import cardBgActivePc from "@/static/home/step_1_active_pc.png";

import card1H5 from "@/static/home/step_1_1_H5.png";
import card2H5 from "@/static/home/step_1_2_H5.png";
import card3H5 from "@/static/home/step_1_3_H5.png";
import stat1H5 from "@/static/home/step_1_4_H5.png";
import stat2H5 from "@/static/home/step_1_5_H5.png";
import stat3H5 from "@/static/home/step_1_6_H5.png";
import stat4H5 from "@/static/home/step_1_7_H5.png";
import cardBgDefaultH5 from "@/static/home/step_1_default_H5.png";
import router from "@/router";

interface ServiceCard {
  icon: string;
  title: string;
  desc: string;
}

interface StatItem {
  icon: string;
  label: string;
}

export function useStep1() {
  const serviceCards: ServiceCard[] = [
    {
      icon: card1Pc,
      title: "多端畅享",
      desc: "APP/H5 全场景覆盖，提升产品曝光与用户触达效率，满足多样化运营需求。",
    },
    {
      icon: card2Pc,
      title: "极速畅玩",
      desc: "全球节点加速，随时随地稳定连接，确保玩家流畅体验。",
    },
    {
      icon: card3Pc,
      title: "品质交付",
      desc: "专业团队协同推进，需求快速响应，项目高效落地。7×24 小时在线服务。",
    },
  ];

  const statItems: StatItem[] = [
    { icon: stat1Pc, label: "包网模板" },
    { icon: stat2Pc, label: "游戏接口" },
    { icon: stat3Pc, label: "游戏种类" },
    { icon: stat4Pc, label: "支付渠道" },
  ];

  const serviceCardsH5: ServiceCard[] = [
    {
      icon: card1H5,
      title: "多端畅享",
      desc: "APP/H5 全场景覆盖，提升产品曝光与用户 触达效率，满足多样化运营需求。",
    },
    {
      icon: card2H5,
      title: "极速畅玩",
      desc: "全球节点加速，随时随地稳定连接，确保 玩家流畅体验。",
    },
    {
      icon: card3H5,
      title: "品质交付",
      desc: "专业团队协同推进，需求快速响应，项目高效落地。7×24小时在线服务。",
    },
  ];

  const statItemsH5: StatItem[] = [
    { icon: stat1H5, label: "包网模板" },
    { icon: stat2H5, label: "游戏接口" },
    { icon: stat3H5, label: "游戏种类" },
    { icon: stat4H5, label: "支付渠道" },
  ];

  const cardBgDefault = `url('${cardBgDefaultPc}')`;
  const cardBgActive = `url('${cardBgActivePc}')`;
  const cardBgH5 = `url('${cardBgDefaultH5}')`;

  const handleViewAll = () => router.push("/serve");

  const countPc = ref(0);
  const countH5 = ref(0);
  const cardsVisiblePc = ref(false);
  const cardsVisibleH5 = ref(false);
  const step1RootPc = ref<HTMLElement | null>(null);
  const step1RootH5 = ref<HTMLElement | null>(null);

  const COUNT_TARGET = 100;
  const COUNT_DURATION = 2000;

  const runCountUp = (state: { value: number }) => {
    state.value = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / COUNT_DURATION, 1);
      state.value = Math.round(progress * COUNT_TARGET);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  let observerPc: IntersectionObserver | null = null;
  let observerH5: IntersectionObserver | null = null;

  onMounted(() => {
    observerPc = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          cardsVisiblePc.value = true;
          runCountUp(countPc);
          observerPc?.disconnect();
          observerPc = null;
        }
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0 },
    );
    if (step1RootPc.value) observerPc.observe(step1RootPc.value);

    observerH5 = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          cardsVisibleH5.value = true;
          runCountUp(countH5);
          observerH5?.disconnect();
          observerH5 = null;
        }
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0 },
    );
    if (step1RootH5.value) observerH5.observe(step1RootH5.value);
  });

  onBeforeUnmount(() => {
    observerPc?.disconnect();
    observerH5?.disconnect();
  });

  return {
    serviceCards,
    statItems,
    serviceCardsH5,
    statItemsH5,
    cardBgDefault,
    cardBgActive,
    cardBgH5,
    handleViewAll,
    countPc,
    countH5,
    cardsVisiblePc,
    cardsVisibleH5,
    step1RootPc,
    step1RootH5,
  };
}
