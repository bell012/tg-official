import iconCooperate from "@/static/about/cooperate.svg?url";
import iconDiamond from "@/static/about/diamond.svg?url";
import iconInnovation from "@/static/about/innovation.svg?url";
import founderPhoto from "@/static/about/founder.png";
import figure1 from "@/static/about/figure1.png?url";
import figure2 from "@/static/about/figure2.png?url";
import figure3 from "@/static/about/figure3.png?url";

export const aboutHeroIntro =
  "我们专注于为客户提供高效、稳定、安全的数字化解决方案，覆盖产品设计、系统开发、平台部署与后期维护等多个环节。";

export const groupIntro = {
  label: "OUR KEY FEATURES",
  title: "集团介绍",
  brand: "TG包网",
  body: "公司自成立以来，凭借专业的研发能力和完善的运营支持体系，我们已成功服务1000+行业客户，项目类型涵盖体育、电子、棋牌、真人、捕鱼、彩票及东南亚海外等领域。我们不仅关注系统功能的完整性，更注重平台长期运营中的稳定性、安全性和扩展能力。",
};

export const coreValues = [
  {
    
    icon: iconInnovation,
    title: "创新",
    desc: "我们不断探索创新技术，为客户提供独特定制的",
    desc2: "包网解决方案，助力客户在竞争激烈的市场中脱颖而出。",
    iconWidth: 100,
    iconHeight: 100,
    iconWidthH5: 160,
    iconHeightH5: 160,
  },
  {
    
    icon: iconDiamond,
    title: "效率",
    desc: "我们将质量视为生命，严格把控每一个开发环节，",
    desc2: "确保为客户提供高品质、可靠的包网服务。",
    iconWidth: 100,
    iconHeight: 100,
    iconWidthH5: 160,
    iconHeightH5: 160,
  },
  {
    
    icon: iconCooperate,
    title: "合作",
    desc: "我们不断探索创新技术，为客户提供独特定制的",
    desc2: "包网解决方案，助力客户在竞争激烈的市场中脱颖而出。",
    iconWidth: 100,
    iconHeight: 100,
    iconWidthH5: 160,
    iconHeightH5: 160,
  },
] as const;

export const coreValuesSection = {
  label: "OUR CORE VALUES",
  title: "核心价值观",
  subtitle: "我们的成功建立在以下核心价值观的基础上",
};

export const reviewStats = [
  { icon: "users", value: "5000万+", label: "全球用户信赖" },
  { icon: "star", value: "安全稳定", label: "资金保障无忧" },
  { icon: "trophy", value: "丰富玩法", label: "电子/真人/体育" },
] as const;

export const reviewsQuote =
  "他们的团队专业、高效，能够真正理解我们的需求，\n并提供超出预期的解决方案与支持。";

export const testimonial = {
  title: "令人愉快的合作体验！",
  body: "从沟通到交付，每一个环节都尽善尽美，团队专业、响应迅速，最终成果远超我们的逾期。",
  name: "ROY MARSHALL",
  role: "创始人，PX-4S50",
};

export const teamMembers = [
  {
    name: "Patrick Bradley",
    role: "CEO/创始人",
    photo: figure1,
  },
  {
    name: "Sara Varges",
    role: "COO",
    photo: figure2,
  },
  {
    name: "Philip Gilbert",
    role: "CMO",
    photo: figure3,
  },
] as const;

export const promo = {
  tag: "限时专属福利来袭！",
  title: "尊享30%折扣",
  desc1: "无论是搭建、运营还是推广服务，现下单即可享超值优惠，助您",
  desc2: "低成本快速开启盈利模式。",
  desc3: "活动时间有限，错过再等一年，立即咨询抢占先机！",
  cta: "立即参与",
};
