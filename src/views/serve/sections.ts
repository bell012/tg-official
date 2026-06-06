import couponPhoneLeft from "@/static/serve/coupon-phone-left.avif";
import couponPhoneCenter from "@/static/serve/coupon-phone-center.avif";
import couponPhoneRight from "@/static/serve/coupon-phone-right.avif";
import couponCornerLeft from "@/static/serve/coupon-corner-left.avif";
import heading01 from "@/static/serve/heading-01-coupon.avif";
import heading02 from "@/static/serve/heading-02-sports.avif";
import heading03 from "@/static/serve/heading-03-electronic.avif";
import heading04 from "@/static/serve/heading-04-live.avif";
import heading05 from "@/static/serve/heading-05-chess.avif";
import heading06 from "@/static/serve/heading-06-fishing.avif";
import heading07 from "@/static/serve/heading-07-lottery.avif";
import heading08 from "@/static/serve/heading-08-security.avif";
import hero02 from "@/static/serve/hero-02-sports.avif";
import hero03 from "@/static/serve/hero-03-electronic.avif";
import hero04 from "@/static/serve/live-casino.avif";
import visual05 from "@/static/serve/visual-05-chess-right.avif";
import hero06 from "@/static/serve/hero-06-fishing.avif";
import visual07 from "@/static/serve/visual-07-lottery-right.avif";
import hero08 from "@/static/serve/hero-08-security.avif";
import decor02 from "@/static/serve/decor-02-sports-br.avif";
import decor03 from "@/static/serve/decor-03-electronic-bl.avif";
import decor04 from "@/static/serve/decor-04-live-br.avif";
import decor05 from "@/static/serve/decor-05-chess-bl.avif";
import decor06 from "@/static/serve/decor-06-fishing-br.avif";
import decor07 from "@/static/serve/decor-07-lottery-bl.avif";
import decor08 from "@/static/serve/decor-08-security-bl.avif";
import h5Visual01 from "@/static/serve/h5-visual-01-coupon.avif";
import h5Visual02 from "@/static/serve/h5-visual-02-sports.avif";
import h5Visual03 from "@/static/serve/h5-visual-03-electronic.avif";
import h5Visual04 from "@/static/serve/h5-visual-04-live.avif";
import h5Visual05 from "@/static/serve/h5-visual-05-chess.avif";
import h5Visual06 from "@/static/serve/h5-visual-06-fishing.avif";
import h5Visual07 from "@/static/serve/h5-visual-07-lottery.avif";
import h5Visual08 from "@/static/serve/h5-visual-08-security.avif";

export interface ServeCouponVisual {
  phones: {
    left: string;
    center: string;
    right: string;
  };
  cornerLeft: string;
}

export type ServeDecorPosition = "bl" | "br";

export interface ServeVisualAsset {
  side: "left" | "right";
  image: string;
  frame?: { left: number; top: number; width: number; height: number };
  fadeBottom?: boolean;
  /** 水平翻转（Figma 电子素材手指朝左） */
  flipHorizontal?: boolean;
}

export interface ServeSectionLayout {
  heading: { left: number; top: number };
  description: { left: number; top: number };
  visual: ServeVisualAsset;
  decor?: { image: string; position: ServeDecorPosition };
}

export interface ServeSection {
  no: string;
  title: string;
  subtitle: string;
  description: string;
  imageAlt: string;
  headingImage: string;
  /** H5 整段配图（Figma 导出合成图） */
  mobileVisualImage?: string;
  layout: ServeSectionLayout;
  couponVisual?: ServeCouponVisual;
}

const layoutTextLeft = {
  heading: { left: 60, top: 121 },
  description: { left: 70, top: 223 },
};

/** 配图在左、文案在右（02/04/06/08）— Figma 83:368 / 83:367 */
const layoutTextRight = {
  heading: { left: 794, top: 121 },
  description: { left: 804, top: 223 },
};

export const serveSections: ServeSection[] = [
  {
    no: "1",
    title: "票券活动",
    subtitle: "Coupon Events",
    description:
      "用票券激活用户行动，让活动更容易产生转化。通过活动联动、专属奖励等玩法，增强用户参与动力，推动用户从浏览到参与，从参与到使用、提升活动转化率，根据我们的市场调研，可提升30%的转化率。",
    imageAlt: "票券活动",
    headingImage: heading01,
    mobileVisualImage: h5Visual01,
    layout: {
      ...layoutTextLeft,
      visual: { side: "right", image: "" },
    },
    couponVisual: {
      phones: {
        left: couponPhoneLeft,
        center: couponPhoneCenter,
        right: couponPhoneRight,
      },
      cornerLeft: couponCornerLeft,
    },
  },
  {
    no: "2",
    title: "体育赛事",
    subtitle: "sports",
    description:
      "公司专注体育包网系统开发，提供体育竞猜、赛事资讯、在线投注、会员管理等功能模块，助力客户快速搭建稳定高效的体育娱乐平台。",
    imageAlt: "体育赛事",
    headingImage: heading02,
    mobileVisualImage: h5Visual02,
    layout: {
      ...layoutTextRight,
      visual: {
        side: "left",
        image: hero02,
        frame: { left: -43, top: -17, width: 547, height: 834 },
      },
      decor: { image: decor02, position: "br" },
    },
  },
  {
    no: "3",
    title: "火爆电子",
    subtitle: "Hot Slot Games",
    description:
      "我们专注打造高品质电子娱乐平台，让我们能够为用户提供稳定、高效的电子游戏娱乐方式。",
    imageAlt: "火爆电子",
    headingImage: heading03,
    mobileVisualImage: h5Visual03,
    layout: {
      ...layoutTextLeft,
      visual: {
        side: "right",
        image: hero03,
        frame: { left: 231, top: 41, width: 425, height: 485 },
        flipHorizontal: true,
      },
      decor: { image: decor03, position: "bl" },
    },
  },
  {
    no: "4",
    title: "真人视讯",
    subtitle: "Live Casino",
    description:
      "真人视讯专区汇聚多款热门直播游戏，高清画面实时呈现，流畅互动体验，让用户仿佛置身真实场景，感受更直观、更沉浸的娱乐氛围。",
    imageAlt: "真人视讯",
    headingImage: heading04,
    mobileVisualImage: h5Visual04,
    layout: {
      ...layoutTextRight,
      visual: {
        side: "left",
        image: hero04,
        frame: { left: 6, top: -50, width: 475.78, height: 846 },
      },
      decor: { image: decor04, position: "br" },
    },
  },
  {
    no: "5",
    title: "热门棋牌",
    subtitle: "Hot CHESS Games",
    description:
      "精选热门棋牌游戏，打造稳定流畅的线上娱乐体验。为用户带来更便捷、更沉浸的棋牌娱乐服务。",
    imageAlt: "热门棋牌",
    headingImage: heading05,
    mobileVisualImage: h5Visual05,
    layout: {
      ...layoutTextLeft,
      visual: { side: "right", image: visual05 },
      decor: { image: decor05, position: "bl" },
    },
  },
  {
    no: "6",
    title: "捕鱼娱乐",
    subtitle: "FISHING GAMES",
    description:
      "平台提供多款捕鱼娱乐玩法，支持高清场景、炫酷特效、快速匹配与流畅操作。丰富鱼种与多样模式相结合，为用户带来更轻松、更精彩的娱乐体验。",
    imageAlt: "捕鱼娱乐",
    headingImage: heading06,
    mobileVisualImage: h5Visual06,
    layout: {
      ...layoutTextRight,
      visual: {
        side: "left",
        image: hero06,
        frame: { left: 57, top: 15, width: 494, height: 516 },
        fadeBottom: true,
      },
      decor: { image: decor06, position: "br" },
    },
  },
  {
    no: "7",
    title: "综合彩票",
    subtitle: "LOTTERY Games",
    description:
      "综合彩票专区整合多种热门彩票玩法，分类清晰、操作便捷，为用户提供一站式彩票娱乐体验。多样化玩法选择，让用户轻松进入感兴趣的内容专区。",
    imageAlt: "综合彩票",
    headingImage: heading07,
    mobileVisualImage: h5Visual07,
    layout: {
      ...layoutTextLeft,
      visual: { side: "right", image: visual07 },
      decor: { image: decor07, position: "bl" },
    },
  },
  {
    no: "8",
    title: "安全保障",
    subtitle: "Security Assurance",
    description:
      "透过TG包网方案，您可以更具优势地打入亚洲市场，开始您的在线娱乐场事业！5大支付方式任选:A网银、快捷、USDT、扫码、点卡接口齐全，防劫持覆盖多端设备、CDN、双向认证加签借口协议，为网站安全保驾护航。",
    imageAlt: "安全保障",
    headingImage: heading08,
    mobileVisualImage: h5Visual08,
    layout: {
      ...layoutTextRight,
      visual: {
        side: "left",
        image: hero08,
        frame: { left: 0, top: 0, width: 612, height: 612 },
        fadeBottom: true,
      },
      decor: { image: decor08, position: "br" },
    },
  },
];

export const serveIntro =
  "专注包网开发多年，覆盖体育、电子、棋牌、真人、捕鱼、彩票、\n综合娱乐平台及海外项目，快速部署、稳定运营，打造稳定高效的运营平台。";
