<template>
  <div class="min-h-screen">
    <!-- PC -->
    <div class="hidden md:block">
      <div class="h-[970px] bg-[#0D0C14]">视频</div>
      <div
        class="w-full h-full bg-[#0D0C14] bg-no-repeat bg-[length:100%_100%]"
        style="background-image: url('/src/static/home/homeBG_pc.png')"
      >
        <!-- 步骤1 -->
        <section class="w-full h-full px-[240px] pt-[60px] pb-[120px]">
          <div class="flex items-end justify-between h-[149px] overflow-hidden">
            <div class="flex items-stretch gap-[16px]">
              <div class="w-[8px] bg-[#FFC16F]"></div>
              <div>
                <div
                  class="relative text-[60px] font-[700] leading-[1] text-[#FFC16F]"
                >
                  01
                  <div
                    class="absolute bottom-[5px] left-0 h-[14px] w-[93px]"
                    style="
                      background: linear-gradient(
                        90deg,
                        rgba(255, 193, 111, 0.4) 0%,
                        rgba(255, 193, 111, 0.08) 100%
                      );
                    "
                  ></div>
                </div>
                <h2
                  class="mt-[3px] text-[50px] font-[600] leading-[1] text-white"
                >
                  包网服务
                </h2>
                <div class="mt-[1px] text-[30px] font-[600] text-white/20">
                  WHITE LABEL SERVICE
                </div>
              </div>
            </div>
            <button
              class="rounded-[10px] border border-[#FFC16F] px-[60px] py-[10px] text-xl font-[600] text-[#FFC16F]"
              @click="handleViewAll"
            >
              查看全部服务
            </button>
          </div>

          <div class="mt-[60px] grid grid-cols-3 gap-[20px]">
            <div
              v-for="card in serviceCards"
              :key="card.title"
              class="service-card flex h-[388px] flex-col items-center justify-center px-[64px] text-center"
            >
              <img :src="card.icon" :alt="card.title" class="h-[136px] w-[136px]" />
              <h3 class="mt-[48px] text-[30px] font-[600] text-white">
                {{ card.title }}
              </h3>
              <p class="mt-[10px] text-base font-[400] text-[#C2C2C2]">
                {{ card.desc }}
              </p>
            </div>
          </div>

          <div
            ref="statsRowPc"
            class="mt-[39px] rounded-[30px] bg-[#1A1921] border border-[#322E28] pt-[40px] pb-[80px]"
          >
            <div class="grid grid-cols-4 gap-[0px]">
              <div
                v-for="stat in statItems"
                :key="stat.label"
                class="flex flex-col items-center"
              >
                <img
                  :src="stat.icon"
                  :alt="stat.label"
                  class="h-[100px] w-[100px]"
                />
                <div class="mt-[10px] text-[50px] font-[600] text-white">
                  {{ countPc }}+
                </div>
                <div class="text-[20px] font-[400] text-[#C2C2C2]">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- H5 -->
    <div class="block md:hidden">
      <div class="h-[667px] bg-[#0D0C14]">视频</div>
      <div
        class="w-full h-full bg-[#0D0C14] bg-no-repeat bg-[length:100%_100%] px-[14px]"
        style="background-image: url('/src/static/home/homeBG_H5.png')"
      >
        <!-- 步骤1 -->
        <section class="w-full h-full pt-[16px] pb-[30px]">
          <div class="flex flex-col items-center">
            <div class="text-[25px] font-[700] leading-[1] text-[#FFC16F]">01</div>
            <div
              class="h-[5px] w-[31px]"
              style="
                background: linear-gradient(
                  180deg,
                  rgba(255, 193, 111, 0) 0%,
                  rgba(255, 193, 111, 0.4) 100%
                );
              "
            ></div>
            <h2 class="mt-[10px] text-[22px] font-[600] text-white">
              包网服务
            </h2>
            <div class="mt-[2px] text-xs font-[600] text-white/40">
              WHITE LABEL SERVICE
            </div>
            <button
              class="mt-[10px] w-[180px] h-[35px] rounded-[7px] bg-[#FFC16F] py-[3px] px[5px] text-sm font-[600] text-[#0D0C14]"
              @click="handleViewAll"
            >
              查看全部服务
            </button>
          </div>

          <div class="mt-[20px] grid grid-cols-3 gap-[10px]">
            <div
              v-for="card in serviceCardsH5"
              :key="card.title"
              class="service-card-h5 min-h-[182px] flex flex-col items-center px-[10px] pb-[12px] pt-[16px] text-center"
            >
              <img :src="card.icon" :alt="card.title" class="h-[45px] w-[45px]" />
              <h3 class="mt-[14px] text-sm font-[600] text-white">
                {{ card.title }}
              </h3>
              <p class="mt-[3px] text-[10px] font-[400] text-[#C2C2C2]">
                {{ card.desc }}
              </p>
            </div>
          </div>

          <div
            ref="statsRowH5"
            class="mt-[10px] rounded-[10px] bg-[#1A1921] border border-[#322E28] py-[14px]"
          >
            <div class="grid grid-cols-4 gap-[0px]">
              <div
                v-for="stat in statItemsH5"
                :key="stat.label"
                class="flex flex-col items-center"
              >
                <img
                  :src="stat.icon"
                  :alt="stat.label"
                  class="h-[33px] w-[33px]"
                />
                <div class="mt-[3px] text-base font-[600] text-white">
                  {{ countH5 }}+
                </div>
                <div class="text-xs font-[400] text-[#C2C2C2]">
                  {{ stat.label }}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStep1 } from "./step1";

const statsRowPc = ref<HTMLElement | null>(null);
const statsRowH5 = ref<HTMLElement | null>(null);

const {
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
} = useStep1({ statsRowPc, statsRowH5 });
</script>

<style scoped lang="scss">
.service-card {
  background-image: v-bind(cardBgDefault);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
}
.service-card:hover {
  background-image: v-bind(cardBgActive);
}

.service-card-h5 {
  background-image: v-bind(cardBgH5);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
