import bgPc from "@/static/home/step5/bg_pc.png";
import bgH5 from "@/static/home/step5/bg_h5.png";
import iconPc from "@/static/home/step5/icon_pc.png";
import iconH5 from "@/static/home/step5/icon_h5.png";
import router from "@/router";

export function useStep5() {
  const joinBgPc = `url('${bgPc}')`;
  const joinBgH5 = `url('${bgH5}')`;

  // 开启财富时代
  const handleJoin = () => {
    router.push("/connect");
  };

  return {
    joinBgPc,
    joinBgH5,
    iconPc,
    iconH5,
    handleJoin,
  };
}
