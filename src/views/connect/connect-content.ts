import { LINK } from "@/utils/jumpLink";

export const connectHeroIntro =
  "欢迎通过以下方式与我们取得联系，TG包网专业团队将为您提供包网咨询、技术对接与全天候运营支持。";

export const contactBlocks = [
  {
    title: "公司地址",
    lines: ["304 North Cardinal St.", "Dorchester Center, MA 02124"],
  },
  {
    title: "Telegram",
    lines: ["@TGbw88888888"],
    href: LINK.telegram,
  },
  {
    title: "联系电话",
    lines: ["(+63) 168 1688"],
  },
  {
    title: "电子邮箱",
    lines: ["TGbw@mail.com"],
    href: "mailto:TGbw@mail.com",
  },
] as const;

export const touchSection = {
  label: "GET IN TOUCH",
  title: "与我们取得联系",
  desc: "无论您是初次了解包网方案，还是寻求系统升级与运营支持，我们都期待为您提供专业、高效的服务。",
  cta: "联系官方 Telegram",
};
