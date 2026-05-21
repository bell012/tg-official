<template>
  <!-- Figma 82:1189 小标题 -->
  <div
    class="relative flex items-center gap-2"
    :class="size === 'sm' ? 'gap-1.5' : 'gap-2'"
  >
    <span
      class="shrink-0 font-semibold leading-none text-[#ffc16f]"
      :class="size === 'sm' ? 'text-[44px]' : 'text-[56px] md:text-[70px]'"
    >
      {{ no }}
    </span>
    <div
      class="relative"
      :class="size === 'sm' ? 'min-h-[52px] w-[130px]' : 'min-h-[66px] w-[162px]'"
    >
      <!-- Group 7：装饰线 + 英文副标题 -->
      <div class="relative h-5">
        <span
          class="absolute left-0 bg-[#ffc16f]"
          :class="size === 'sm' ? 'top-[7px] h-px w-7' : 'top-[9px] h-0.5 w-[38px]'"
        />
        <span
          class="absolute left-0 bg-[#ffc16f]"
          :class="size === 'sm' ? 'top-[11px] h-px w-7' : 'top-[14px] h-px w-[38px]'"
        />
        <p
          class="absolute left-[42px] top-0 font-normal uppercase text-[#ffc16f]"
          :class="size === 'sm' ? 'text-[11px]' : 'text-sm'"
        >
          {{ subtitle }}
        </p>
      </div>
      <!-- 中文主标题 -->
      <h3
        class="font-semibold text-white"
        :class="
          size === 'sm'
            ? 'mt-3 text-[22px] leading-tight'
            : 'mt-4 text-[28px] leading-tight md:text-[36px]'
        "
      >
        {{ title }}
      </h3>
      <!-- Group 3 渐变装饰线（位于标题下方） -->
      <div
        class="mt-2 bg-gradient-to-r from-white to-white/20"
        :class="size === 'sm' ? 'ml-2 h-1.5 w-[120px]' : 'ml-[15px] h-2.5 w-[182px]'"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    no: string;
    title: string;
    subtitle: string;
    size?: "sm" | "md";
  }>(),
  { size: "md" }
);
</script>
