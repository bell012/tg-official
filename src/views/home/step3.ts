import { onBeforeUnmount, onMounted, ref } from "vue";
import logo1 from "@/static/home/step_3/step_3_1.avif";
import logo2 from "@/static/home/step_3/step_3_2.avif";
import logo3 from "@/static/home/step_3/step_3_3.avif";
import logo4 from "@/static/home/step_3/step_3_4.avif";
import logo5 from "@/static/home/step_3/step_3_5.avif";
import logo6 from "@/static/home/step_3/step_3_6.avif";

import sport1 from "@/static/home/step_3/step_3_21.avif";
import sport2 from "@/static/home/step_3/step_3_22.avif";
import sport3 from "@/static/home/step_3/step_3_23.avif";
import sport4 from "@/static/home/step_3/step_3_24.avif";
import sport5 from "@/static/home/step_3/step_3_25.avif";
import sport6 from "@/static/home/step_3/step_3_26.avif";

import game1 from "@/static/home/step_3/step_3_31.avif";
import game2 from "@/static/home/step_3/step_3_32.avif";
import game3 from "@/static/home/step_3/step_3_33.avif";
import game4 from "@/static/home/step_3/step_3_34.avif";
import game5 from "@/static/home/step_3/step_3_35.avif";
import game6 from "@/static/home/step_3/step_3_36.avif";

export function useStep3() {
  const brandLogos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const sportsGames = [sport1, sport2, sport3, sport4, sport5, sport6];
  const boardGames = [game1, game2, game3, game4, game5, game6];

  const brandLogosLoop = [...brandLogos, ...brandLogos];
  const sportsGamesLoop = [...sportsGames, ...sportsGames];
  const boardGamesLoop = [...boardGames, ...boardGames];

  const step3RootPc = ref<HTMLElement | null>(null);
  const step3RootH5 = ref<HTMLElement | null>(null);
  const step3VisiblePc = ref(false);
  const step3VisibleH5 = ref(false);

  let observerPc: IntersectionObserver | null = null;
  let observerH5: IntersectionObserver | null = null;

  onMounted(() => {
    observerPc = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          step3VisiblePc.value = true;
          observerPc?.disconnect();
          observerPc = null;
        }
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0 },
    );
    if (step3RootPc.value) observerPc.observe(step3RootPc.value);

    observerH5 = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          step3VisibleH5.value = true;
          observerH5?.disconnect();
          observerH5 = null;
        }
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0 },
    );
    if (step3RootH5.value) observerH5.observe(step3RootH5.value);
  });

  onBeforeUnmount(() => {
    observerPc?.disconnect();
    observerH5?.disconnect();
  });

  return {
    brandLogos,
    sportsGames,
    boardGames,
    brandLogosLoop,
    sportsGamesLoop,
    boardGamesLoop,
    step3RootPc,
    step3RootH5,
    step3VisiblePc,
    step3VisibleH5,
  };
}
