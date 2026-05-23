import { onMounted, onUnmounted, ref, type Ref } from "vue";

export function useScrollReveal(target: Ref<HTMLElement | null>) {
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

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          isRevealed.value = true;
          el.classList.add("is-revealed");
          observer?.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return { isRevealed };
}
