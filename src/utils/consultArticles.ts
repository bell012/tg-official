import {
  getNumberedAsset,
  loadNumberedAssets,
} from "@/utils/loadNumberedAssets";

const pcArticleMap = loadNumberedAssets(
  import.meta.glob("@/static/consult/pc/article-*.webp", {
    eager: true,
    import: "default",
  }),
  /article-(\d+)\.webp$/
);

const h5ArticleMap = loadNumberedAssets(
  import.meta.glob("@/static/consult/h5/article-*.webp", {
    eager: true,
    import: "default",
  }),
  /article-(\d+)\.webp$/
);

function pcArticle(id: number) {
  return getNumberedAsset(pcArticleMap, id, "consult pc article");
}

function h5Article(id: number) {
  return getNumberedAsset(h5ArticleMap, id, "consult h5 article");
}

export interface ConsultArticle {
  id: number;
  title: string;
  pcImage: string;
  h5Image: string;
}

/** Figma 84:915 — 第 1 页 */
const consultPage1: ConsultArticle[] = [
  {
    id: 1,
    title: "2026年，手里有流量怎么变现？开个线上娱乐平台你需要准备什么？",
    pcImage: pcArticle(1),
    h5Image: h5Article(1),
  },
  {
    id: 2,
    title: "包网一条龙真的省心吗？从域名、服务器到 APP 打包，我们如何做到 7 天上线。",
    pcImage: pcArticle(2),
    h5Image: h5Article(2),
  },
  {
    id: 3,
    title: "域名老是报红？详解体育包网「影子域名」+ HSTS 强制加密的 2026 防封黑科技",
    pcImage: pcArticle(3),
    h5Image: h5Article(3),
  },
  {
    id: 4,
    title: "百家乐包网API接入：PA、Evolution、BBIN一键集成全攻略",
    pcImage: pcArticle(4),
    h5Image: h5Article(4),
  },
  {
    id: 5,
    title: "如何提升视讯包网的玩家留存率：实用策略与技巧",
    pcImage: pcArticle(5),
    h5Image: h5Article(5),
  },
  {
    id: 6,
    title: "博彩包网后台风控系统如何拦截刷水账号？资深包网厂商揭秘核心逻辑",
    pcImage: pcArticle(6),
    h5Image: h5Article(6),
  },
];

/** Figma 166:1956 — 第 2 页 */
const consultPage2: ConsultArticle[] = [
  {
    id: 7,
    title: "体育 iGaming 网站开发搭建的五大核心难点分析（2026技术指南）",
    pcImage: pcArticle(7),
    h5Image: pcArticle(7),
  },
  {
    id: 8,
    title: "现金网代理 VS 自营开发：优势与风险分析",
    pcImage: pcArticle(8),
    h5Image: pcArticle(8),
  },
  {
    id: 9,
    title: "PA搭建网站流程与API接口的申请指南",
    pcImage: pcArticle(9),
    h5Image: pcArticle(9),
  },
  {
    id: 10,
    title: "真人视讯网如何搭建：完整指南与最佳实践",
    pcImage: pcArticle(10),
    h5Image: pcArticle(10),
  },
  {
    id: 11,
    title: "包网平台-娱乐城包网应该如何去选择服务商？",
    pcImage: pcArticle(11),
    h5Image: pcArticle(11),
  },
  {
    id: 12,
    title: "BC网站搭建开发流程及选择靠谱服务商的重要性",
    pcImage: pcArticle(12),
    h5Image: pcArticle(12),
  },
];

/** Figma 166:2104 — 第 3 页 */
const consultPage3: ConsultArticle[] = [
  {
    id: 13,
    title: "什么是综合包网？一站式博彩包网搭建方案",
    pcImage: pcArticle(13),
    h5Image: pcArticle(13),
  },
  {
    id: 14,
    title: "包网服务和游戏api接口有什么区别？",
    pcImage: pcArticle(14),
    h5Image: pcArticle(14),
  },
  {
    id: 15,
    title: "体育直播系统与包网的结合方案前景畅谈",
    pcImage: pcArticle(15),
    h5Image: pcArticle(15),
  },
  {
    id: 16,
    title: "棋牌现金网开发的弊端 VS TG包网的优势",
    pcImage: pcArticle(16),
    h5Image: pcArticle(16),
  },
  {
    id: 17,
    title: "包网系统该如何选择？",
    pcImage: pcArticle(17),
    h5Image: pcArticle(17),
  },
  {
    id: 18,
    title: "线上老虎机的魅力：为何越来越多的人选择在线游戏",
    pcImage: pcArticle(18),
    h5Image: pcArticle(18),
  },
];

export const consultArticlePages: ConsultArticle[][] = [
  consultPage1,
  consultPage2,
  consultPage3,
];

export const consultTotalPages = consultArticlePages.length;

/** H5 无分页，三页数据合并展示 */
export const consultAllArticles = consultArticlePages.flat();

export function getArticleById(id: number): ConsultArticle | undefined {
  return consultAllArticles.find((item) => item.id === id);
}
