import bgPc from "@/static/home/step5/bg_pc.png";
import bgH5 from "@/static/home/step5/bg_h5.png";
import iconPc from "@/static/home/step5/icon_pc.png";
import iconH5 from "@/static/home/step5/icon_h5.png";

export function useStep5() {
  const joinBgPc = `url('${bgPc}')`;
  const joinBgH5 = `url('${bgH5}')`;

  const handleJoin = () => {
    console.log("开启财富时代");
  };

  return {
    joinBgPc,
    joinBgH5,
    iconPc,
    iconH5,
    handleJoin,
  };
}
