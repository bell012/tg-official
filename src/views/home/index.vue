<template>
  <div class="min-h-screen">
    <!-- PC -->
    <div class="hidden lg:block">
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
              <img
                :src="card.icon"
                :alt="card.title"
                class="h-[136px] w-[136px]"
              />
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

        <!-- 步骤2 -->
        <section class="w-full px-[240px] pb-[120px]">
          <div class="flex items-stretch h-[149px] overflow-hidden gap-[16px]">
            <div class="w-[8px] bg-[#FFC16F]"></div>
            <div>
              <div
                class="relative text-[60px] font-[700] leading-[1] text-[#FFC16F]"
              >
                02
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
                APP/H5演示
              </h2>
              <div class="mt-[1px] text-[30px] font-[600] text-white/20">
                APP/H5 DEMO PREVIEW
              </div>
            </div>
          </div>

          <div class="mt-[60px] grid grid-cols-2 gap-[120px] items-center">
            <img :src="phonePc" alt="APP/H5演示" class="w-full h-[821px]" />
            <div
              class="rounded-[10px] border border-[#322E28] bg-[#1A1921] px-[43px] pt-[60px] pb-[50px]"
            >
              <h3 class="text-center text-[36px] font-[600] text-white">
                APP体验流畅稳定，H5访问轻便快捷<br />一站式整合全玩法，畅玩体验全面升级
              </h3>
              <p class="mt-[30px] text-[18px] font-[400] text-[#C2C2C2]">
                火爆电子、热门棋牌、体育赛事、真人视讯、捕鱼娱乐、综合彩票、热门娱乐品类全面集成，随时满足玩家畅玩需求，H5免安装即开即玩，也可下载App感受原生级流畅体验。
              </p>
            </div>
          </div>

          <div class="mt-[60px] text-left text-[36px] font-[600] text-white">
            四大核心优势，驱动平台增长
          </div>

          <div class="mt-[20px] grid grid-cols-4 gap-[20px]">
            <div
              v-for="card in featureCards"
              :key="card.title"
              class="feature-card flex h-[500px] flex-col items-center pt-[60px] text-center"
            >
              <h3 class="text-[30px] font-[600] text-white">
                {{ card.title }}
              </h3>
              <p
                class="mt-[10px] px-[68px] text-base font-[400] text-[#C2C2C2]"
              >
                {{ card.desc }}
              </p>
              <img
                :src="card.icon"
                :alt="card.title"
                class="mt-auto h-[316px] w-auto"
              />
            </div>
          </div>
        </section>

        <!-- 步骤3 -->
        <section class="w-full px-[240px] pb-[120px]">
          <div class="flex items-stretch h-[149px] overflow-hidden gap-[16px]">
            <div class="w-[8px] bg-[#FFC16F]"></div>
            <div>
              <div
                class="relative text-[60px] font-[700] leading-[1] text-[#FFC16F]"
              >
                03
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
                海量游戏
              </h2>
              <div class="mt-[1px] text-[30px] font-[600] text-white/20">
                MASSIVE GAMES
              </div>
            </div>
          </div>

          <div class="mt-[60px] text-[36px] font-[600] text-white">
            10,000+热门游戏全面覆盖
          </div>
          <p class="mt-[20px] text-[18px] font-[400] text-[#C2C2C2]">
            TG包网集团长期与各大知名游戏厂商保持稳定合作，聚合超过10000+款热门游戏资源，覆盖多元娱乐需求。我们不仅追求游戏数量，更重视内容品质、用户体验与市场反馈，每一款上线游戏都经过严格筛选与专业测试。我们愿与您共同深耕市场，携手同行，共创最大商业价值。
          </p>

          <div class="mt-[60px] grid grid-cols-6 gap-[20px]">
            <img
              v-for="(src, i) in brandLogos"
              :key="`brand-${i}`"
              :src="src"
              alt=""
              class="w-full"
            />
          </div>

          <div class="mt-[30px] grid grid-cols-6 gap-[20px]">
            <img
              v-for="(src, i) in sportsGames"
              :key="`sport-${i}`"
              :src="src"
              alt=""
              class="w-full"
            />
          </div>

          <div class="mt-[30px] grid grid-cols-6 gap-[20px]">
            <img
              v-for="(src, i) in boardGames"
              :key="`game-${i}`"
              :src="src"
              alt=""
              class="w-full"
            />
          </div>
        </section>

        <!-- 步骤4 -->
        <section class="w-full px-[240px] pb-[120px]">
          <div class="flex items-stretch h-[149px] overflow-hidden gap-[16px]">
            <div class="w-[8px] bg-[#FFC16F]"></div>
            <div>
              <div
                class="relative text-[60px] font-[700] leading-[1] text-[#FFC16F]"
              >
                04
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
                包网市场动态
              </h2>
              <div class="mt-[1px] text-[30px] font-[600] text-white/20">
                TURNKEY IGAMING MARKET TRENDS
              </div>
            </div>
          </div>

          <div class="mt-[60px] grid grid-cols-3 gap-[39px]">
            <RouterLink
              v-for="article in articles"
              :key="article.id"
              :to="`/consult/${article.id}`"
              class="group flex w-full h-[620px] flex-col overflow-hidden rounded-[30px] border border-[#322E28] bg-[#1A1921] text-inherit no-underline cursor-pointer"
            >
              <div class="w-full h-[456px] flex-shrink-0 overflow-hidden">
                <img
                  :src="article.pcImage"
                  :alt="article.title"
                  class="block h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,1,0.2,1)] group-hover:scale-[1.12]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 class="mt-[30px] px-[20px] text-[24px] font-[600] text-white">
                {{ article.title }}
              </h3>
            </RouterLink>
          </div>
        </section>
      </div>
    </div>

    <!-- H5 -->
    <div class="block lg:hidden">
      <div class="h-[667px] bg-[#0D0C14]">视频</div>
      <div
        class="w-full h-full bg-[#0D0C14] bg-no-repeat bg-[length:100%_100%] px-[14px]"
        style="background-image: url('/src/static/home/homeBG_H5.png')"
      >
        <!-- 步骤1 -->
        <section class="w-full h-full pt-[16px] pb-[30px]">
          <div class="flex flex-col items-center">
            <div class="text-[25px] font-[700] leading-[1] text-[#FFC16F]">
              01
            </div>
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
              <img
                :src="card.icon"
                :alt="card.title"
                class="h-[45px] w-[45px]"
              />
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

        <!-- 步骤2 -->
        <section class="pb-[30px]">
          <div class="flex flex-col items-center">
            <div class="text-[25px] font-[700] leading-[1] text-[#FFC16F]">
              02
            </div>
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
              APP/H5演示
            </h2>
            <div class="mt-[2px] text-xs font-[600] text-white/40">
              APP/H5 DEMO PREVIEW
            </div>
          </div>

          <div
            class="mt-[20px] rounded-[10px] bg-[#1A1921] border border-[#322E28] p-[14px]"
          >
            <h3 class="text-base font-[600] text-white text-left">
              APP体验流畅稳定，H5访问轻便快捷，一站式整合全玩法，畅玩体验全面升级
            </h3>
            <p class="mt-[10px] text-[10px] font-[400] text-[#C2C2C2]">
              火爆电子、热门棋牌、体育赛事、真人视讯、捕鱼娱乐、综合彩票、热门娱乐品类全面集成，随时满足玩家畅玩需求，H5免安装即开即玩，也可下载App感受原生级流畅体验。
            </p>
          </div>

          <img
            :src="phoneH5"
            alt="APP/H5演示"
            class="mt-[20px] w-[282px] h-full mx-auto"
          />

          <div class="mt-[20px] text-center text-base font-[600] text-white">
            四大核心优势，驱动平台增长
          </div>

          <div class="mt-[14px] grid grid-cols-2 gap-[14px]">
            <div
              v-for="card in featureCards"
              :key="card.title"
              class="feature-card-h5 flex h-[197px] flex-col items-center pt-[20px] text-center"
            >
              <h3 class="text-base font-[600] text-white">
                {{ card.title }}
              </h3>
              <p class="mt-[3px] px-[14px] text-xs font-[400] text-[#C2C2C2]">
                {{ card.desc }}
              </p>
              <img
                :src="card.icon"
                :alt="card.title"
                class="h-[105px] w-auto"
              />
            </div>
          </div>
        </section>

        <!-- 步骤3 -->
        <section class="pb-[30px]">
          <div class="flex flex-col items-center">
            <div class="text-[25px] font-[700] leading-[1] text-[#FFC16F]">
              03
            </div>
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
              海量游戏
            </h2>
            <div class="mt-[2px] text-xs font-[600] text-white/40">
              MASSIVE GAMES
            </div>
          </div>

          <div class="mt-[20px] text-center text-lg font-[600] text-white">
            10,000+热门游戏全面覆盖
          </div>
          <p
            class="mt-[10px] text-xs font-[400] leading-[20px] text-[#C2C2C2] text-center"
          >
            TG包网集团长期与各大知名游戏厂商保持稳定合作，聚合超过10000+款热门游戏资源，覆盖多元娱乐需求。我们不仅追求游戏数量，更重视内容品质、用户体验与市场反馈，每一款上线游戏都经过严格筛选与专业测试。我们愿与您共同深耕市场，携手同行，共创最大商业价值。
          </p>

          <div class="marquee mt-[20px]">
            <div class="marquee-track marquee-rtl">
              <div
                v-for="(src, i) in brandLogosLoop"
                :key="`b-${i}`"
                class="marquee-item"
              >
                <img :src="src" alt="" class="h-[30px] w-auto" />
              </div>
            </div>
          </div>

          <div class="marquee mt-[10px]">
            <div class="marquee-track marquee-ltr">
              <div
                v-for="(src, i) in sportsGamesLoop"
                :key="`s-${i}`"
                class="marquee-item"
              >
                <img :src="src" alt="" class="h-[74px] w-auto" />
              </div>
            </div>
          </div>

          <div class="marquee mt-[10px]">
            <div class="marquee-track marquee-rtl">
              <div
                v-for="(src, i) in boardGamesLoop"
                :key="`g-${i}`"
                class="marquee-item"
              >
                <img :src="src" alt="" class="h-[74px] w-auto" />
              </div>
            </div>
          </div>
        </section>

        <!-- 步骤4 -->
        <section class="pb-[30px]">
          <div class="flex flex-col items-center">
            <div class="text-[25px] font-[700] leading-[1] text-[#FFC16F]">
              04
            </div>
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
              包网市场动态
            </h2>
            <div class="mt-[2px] text-xs font-[600] text-white/40">
              TURNKEY IGAMING MARKET TRENDS
            </div>
          </div>

          <div class="mt-[20px] flex flex-col gap-[10px]">
            <RouterLink
              v-for="article in articles"
              :key="article.id"
              :to="`/consult/${article.id}`"
              class="group flex w-full flex-col overflow-hidden rounded-[10px] border border-[#322E28] bg-[#1A1921]"
            >
              <div class="h-[195px] w-full flex-shrink-0 overflow-hidden">
                <img
                  :src="article.h5Image"
                  :alt="article.title"
                  class="block h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.2,1,0.2,1)] group-hover:scale-[1.12]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3 class="p-[14px] text-sm font-[600] text-white">
                {{ article.title }}
              </h3>
            </RouterLink>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useStep1 } from "./step1";
import { useStep2 } from "./step2";
import { useStep3 } from "./step3";
import { useStep4 } from "./step4";

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

const {
  featureCards,
  phonePc,
  phoneH5,
  featureBgDefault,
  featureBgActive,
  featureBgH5,
} = useStep2();

const {
  brandLogos,
  sportsGames,
  boardGames,
  brandLogosLoop,
  sportsGamesLoop,
  boardGamesLoop,
} = useStep3();

const { articles } = useStep4();
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

.feature-card {
  background-image: v-bind(featureBgDefault);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
}
.feature-card:hover {
  background-image: v-bind(featureBgActive);
}

.feature-card-h5 {
  background-image: v-bind(featureBgH5);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.marquee {
  overflow: hidden;
  width: 100%;
}
.marquee-track {
  display: flex;
  width: max-content;
  animation-duration: 25s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.marquee-item {
  flex-shrink: 0;
  margin-right: 7px;
}
.marquee-rtl {
  animation-name: marquee-rtl;
}
.marquee-ltr {
  animation-name: marquee-ltr;
}
@keyframes marquee-rtl {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}
@keyframes marquee-ltr {
  0% {
    transform: translate3d(-50%, 0, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
</style>
