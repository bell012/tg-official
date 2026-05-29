import { onBeforeUnmount, onMounted, ref } from "vue";
import { consultArticlePages } from "@/utils/consultArticles";

export function useStep4() {
  const articles = consultArticlePages[0].slice(0, 3);

  const step4RootPc = ref<HTMLElement | null>(null);
  const step4RootH5 = ref<HTMLElement | null>(null);
  const step4VisiblePc = ref(false);
  const step4VisibleH5 = ref(false);

  let observerPc: IntersectionObserver | null = null;
  let observerH5: IntersectionObserver | null = null;

  onMounted(() => {
    observerPc = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          step4VisiblePc.value = true;
          observerPc?.disconnect();
          observerPc = null;
        }
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0 },
    );
    if (step4RootPc.value) observerPc.observe(step4RootPc.value);

    observerH5 = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          step4VisibleH5.value = true;
          observerH5?.disconnect();
          observerH5 = null;
        }
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0 },
    );
    if (step4RootH5.value) observerH5.observe(step4RootH5.value);
  });

  onBeforeUnmount(() => {
    observerPc?.disconnect();
    observerH5?.disconnect();
  });

  return {
    articles,
    step4RootPc,
    step4RootH5,
    step4VisiblePc,
    step4VisibleH5,
  };
}
