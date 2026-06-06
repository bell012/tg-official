import { onBeforeUnmount, onMounted, ref } from "vue";
import bgPc from "@/static/home/step5/bg_pc.avif";
import bgH5 from "@/static/home/step5/bg_h5.avif";
import iconPc from "@/static/home/step5/icon_pc.avif";
import iconH5 from "@/static/home/step5/icon_h5.avif";
import router from "@/router";

export function useStep5() {
  const joinBgPc = `url('${bgPc}')`;
  const joinBgH5 = `url('${bgH5}')`;

  // 开启财富时代
  const handleJoin = () => {
    router.push("/connect");
  };

  const step5RootPc = ref<HTMLElement | null>(null);
  const step5RootH5 = ref<HTMLElement | null>(null);
  const step5VisiblePc = ref(false);
  const step5VisibleH5 = ref(false);

  let observerPc: IntersectionObserver | null = null;
  let observerH5: IntersectionObserver | null = null;

  onMounted(() => {
    observerPc = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          step5VisiblePc.value = true;
          observerPc?.disconnect();
          observerPc = null;
        }
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0 },
    );
    if (step5RootPc.value) observerPc.observe(step5RootPc.value);

    observerH5 = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          step5VisibleH5.value = true;
          observerH5?.disconnect();
          observerH5 = null;
        }
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0 },
    );
    if (step5RootH5.value) observerH5.observe(step5RootH5.value);
  });

  onBeforeUnmount(() => {
    observerPc?.disconnect();
    observerH5?.disconnect();
  });

  return {
    joinBgPc,
    joinBgH5,
    iconPc,
    iconH5,
    handleJoin,
    step5RootPc,
    step5RootH5,
    step5VisiblePc,
    step5VisibleH5,
  };
}
