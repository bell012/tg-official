import couponPhoneLeft from "@/static/serve/coupon-phone-left.png";
import couponPhoneCenter from "@/static/serve/coupon-phone-center.png";
import couponPhoneRight from "@/static/serve/coupon-phone-right.png";
import couponCornerLeft from "@/static/serve/coupon-corner-left.png";
import sportsImg from "@/static/serve/sports.png";
import electronicImg from "@/static/serve/electronic.png";
import liveCasinoImg from "@/static/serve/live-casino.png";
import chessImg from "@/static/serve/chess.png";
import fishingImg from "@/static/serve/fishing.png";
import lotteryImg from "@/static/serve/lottery.png";
import securityImg from "@/static/serve/security.png";

export interface ServeCouponVisual {
  phones: {
    left: string;
    center: string;
    right: string;
  };
  /** Figma 84:767 左下角装饰 */
  cornerLeft: string;
}

export interface ServeSection {
  no: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  /** 配图在左侧（偶数序号 2/4/6/8 为 true） */
  imageOnLeft?: boolean;
  /** 票券活动专用视觉 */
  couponVisual?: ServeCouponVisual;
}

export const serveSections: ServeSection[] = [
  {
    no: "1",
    title: "票券活动",
    subtitle: "Coupon Events",
    description:
      "用票券激活用户行动，让活动更容易产生转化。通过活动联动、专属奖励等玩法，增强用户参与动力，推动用户从浏览到参与，从参与到使用、提升活动转化率，根据我们的市场调研，可提升30%的转化率。",
    image: couponPhoneCenter,
    imageAlt: "票券活动",
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
    image: sportsImg,
    imageAlt: "体育赛事",
    imageOnLeft: true,
  },
  {
    no: "3",
    title: "火爆电子",
    subtitle: "Hot Slot Games",
    description:
      "我们专注打造高品质电子娱乐平台，让我们能够为用户提供稳定、高效的电子游戏娱乐方式。",
    image: electronicImg,
    imageAlt: "火爆电子",
  },
  {
    no: "4",
    title: "真人视讯",
    subtitle: "Live Casino",
    description:
      "真人视讯专区汇聚多款热门直播游戏，高清画面实时呈现，流畅互动体验，让用户仿佛置身真实场景，感受更直观、更沉浸的娱乐氛围。",
    image: liveCasinoImg,
    imageAlt: "真人视讯",
    imageOnLeft: true,
  },
  {
    no: "5",
    title: "热门棋牌",
    subtitle: "Hot CHESS Games",
    description:
      "精选热门棋牌游戏，打造稳定流畅的线上娱乐体验。为用户带来更便捷、更沉浸的棋牌娱乐服务。",
    image: chessImg,
    imageAlt: "热门棋牌",
  },
  {
    no: "6",
    title: "捕鱼娱乐",
    subtitle: "FISHING GAMES",
    description:
      "平台提供多款捕鱼娱乐玩法，支持高清场景、炫酷特效、快速匹配与流畅操作。丰富鱼种与多样模式相结合，为用户带来更轻松、更精彩的娱乐体验。",
    image: fishingImg,
    imageAlt: "捕鱼娱乐",
    imageOnLeft: true,
  },
  {
    no: "7",
    title: "综合彩票",
    subtitle: "LOTTERY Games",
    description:
      "综合彩票专区整合多种热门彩票玩法，分类清晰、操作便捷，为用户提供一站式彩票娱乐体验。多样化玩法选择，让用户轻松进入感兴趣的内容专区。",
    image: lotteryImg,
    imageAlt: "综合彩票",
  },
  {
    no: "8",
    title: "安全保障",
    subtitle: "Security Assurance",
    description:
      "透过TG包网方案，您可以更具优势地打入亚洲市场，开始您的在线娱乐场事业！5大支付方式任选:A网银、快捷、USDT、扫码、点卡接口齐全，防劫持覆盖多端设备、CDN、双向认证加签借口协议，为网站安全保驾护航。",
    image: securityImg,
    imageAlt: "安全保障",
    imageOnLeft: true,
  },
];

export const serveIntro =
  "专注包网开发多年，覆盖体育、电子、棋牌、真人、捕鱼、彩票、\n综合娱乐平台及海外项目，快速部署、稳定运营，打造稳定高效的运营平台。";
