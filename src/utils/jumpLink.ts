export const LINK = {
  telegram: "https://t.me/TGbw88888888",
  whatsapp: "https://wa.me/639859888888",
  facebook: "",
  tiktok: "",
  TGgame: "https://web.txtvv9.top",
};

export const openLink = (url: string) => {
  if (!url) return;
  window.open(url, "_blank", "noopener,noreferrer");
};