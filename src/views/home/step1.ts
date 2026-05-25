import { ref, onMounted, onBeforeUnmount, type Ref } from "vue";
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

interface ServiceCard {
  icon: string;
  title: string;
  desc: string;
}

interface StatItem {
  icon: string;
  label: string;
}

export function useStep1(refs: {
  statsRowPc: Ref<HTMLElement | null>;
  statsRowH5: Ref<HTMLElement | null>;
}) {
  const { statsRowPc, statsRowH5 } = refs;
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

  const handleViewAll = () => console.log("查看全部服务");

  const countPc = ref(0);
  const countH5 = ref(0);

  const COUNT_TARGET = 100;
  const COUNT_DURATION = 2000;

  let pcToken = 0;
  let h5Token = 0;

  const runCountUp = (
    state: { value: number },
    getToken: () => number,
    myToken: number,
  ) => {
    state.value = 0;
    const start = performance.now();
    const tick = (now: number) => {
      if (myToken !== getToken()) return;
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
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            pcToken += 1;
            runCountUp(countPc, () => pcToken, pcToken);
          }
        });
      },
      { threshold: 0.3 },
    );
    if (statsRowPc.value) observerPc.observe(statsRowPc.value);

    observerH5 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            h5Token += 1;
            runCountUp(countH5, () => h5Token, h5Token);
          }
        });
      },
      { threshold: 0.3 },
    );
    if (statsRowH5.value) observerH5.observe(statsRowH5.value);
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
  };
}
