import {
  getNumberedAsset,
  loadNumberedAssets,
} from "@/utils/loadNumberedAssets";

const detailPcHeroMap = loadNumberedAssets(
  import.meta.glob("@/static/consult/detail/pc/hero-*.avif", {
    eager: true,
    import: "default",
  }),
  /hero-(\d+)\.avif$/
);

const detailH5HeroMap = loadNumberedAssets(
  import.meta.glob("@/static/consult/detail/h5/hero-*.avif", {
    eager: true,
    import: "default",
  }),
  /hero-(\d+)\.avif$/
);

function detailPcHero(id: number) {
  return getNumberedAsset(detailPcHeroMap, id, "consult detail pc hero");
}

/** Figma 详情帧「图1」导出 — PC 949×544 @2x */
export const consultDetailPcHeroes: Record<number, string> = Object.fromEntries(
  Array.from({ length: 18 }, (_, index) => [index + 1, detailPcHero(index + 1)])
);

/** Figma 164:3521 仅第 1 篇有 H5 详情帧；其余复用 PC 详情头图 */
export const consultDetailH5Heroes: Record<number, string> = Object.fromEntries(
  Array.from({ length: 18 }, (_, index) => {
    const id = index + 1;
    const h5Hero = detailH5HeroMap[id];
    return [id, h5Hero ?? detailPcHero(id)];
  })
);

export function getDetailPcHero(id: number): string | undefined {
  return consultDetailPcHeroes[id];
}

export function getDetailH5Hero(id: number): string | undefined {
  return consultDetailH5Heroes[id];
}
