import { onMounted, onUnmounted, ref, type Ref } from "vue";

function getObserverOptions(): IntersectionObserverInit {
  const isMobile = window.matchMedia("(max-width: 1023px)").matches;

  if (isMobile) {
    // 提前在视口外触发，滚到时动画已结束，减少滚动过程中的重绘
    return { threshold: 0, rootMargin: "0px 0px 200px 0px" };
  }

  return { threshold: 0.15, rootMargin: "0px 0px -8% 0px" };
}

export function useScrollReveal(
  target: Ref<HTMLElement | null>,
  optionsOverride?: IntersectionObserverInit
) {
  const isRevealed = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    const el = target.value;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      isRevealed.value = true;
      el.classList.add("is-revealed");
      return;
    }

    observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        isRevealed.value = true;
        el.classList.add("is-revealed");
        observer?.disconnect();
      }
    }, optionsOverride ?? getObserverOptions());
    observer.observe(el);
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return { isRevealed };
}
