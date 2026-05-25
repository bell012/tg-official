import phonePc from "@/static/home/step_2/step_2_1_pc.png";
import phoneH5 from "@/static/home/step_2/step_2_1_H5.png";
import icon1 from "@/static/home/step_2/step_2_icon_1.svg?url";
import icon2 from "@/static/home/step_2/step_2_icon_2.svg?url";
import icon3 from "@/static/home/step_2/step_2_icon_3.svg?url";
import icon4 from "@/static/home/step_2/step_2_icon_4.svg?url";
import featureBgDefaultPc from "@/static/home/step_2/step_2_default_pc.png";
import featureBgActivePc from "@/static/home/step_2/step_2_active_pc.png";
import featureBgDefaultH5 from "@/static/home/step_2/step_2_default_H5.png";

interface FeatureCard {
  icon: string;
  title: string;
  desc: string;
}

export function useStep2() {
  const featureCards: FeatureCard[] = [
    {
      icon: icon1,
      title: "巅峰娱乐",
      desc: "专业团队 顶尖技术 实力护航 安全可靠 专注打造高品质娱乐平台",
    },
    {
      icon: icon2,
      title: "极致流畅",
      desc: "直击卡顿 流畅开局 多端适配 指尖畅玩 掌上娱乐畅享全新体验",
    },
    {
      icon: icon3,
      title: "运营赋能",
      desc: "精选活动 优惠配置 福利联动 用户留存 高效运营驱动持续增长",
    },
    {
      icon: icon4,
      title: "钱程无忧",
      desc: "专家指导 大神交流 社群活跃 内容沉淀 深度运营链接行业大神圈",
    },
  ];

  const featureBgDefault = `url('${featureBgDefaultPc}')`;
  const featureBgActive = `url('${featureBgActivePc}')`;
  const featureBgH5 = `url('${featureBgDefaultH5}')`;

  return {
    featureCards,
    phonePc,
    phoneH5,
    featureBgDefault,
    featureBgActive,
    featureBgH5,
  };
}
