import logo1 from "@/static/home/step_3/step_3_1.png";
import logo2 from "@/static/home/step_3/step_3_2.png";
import logo3 from "@/static/home/step_3/step_3_3.png";
import logo4 from "@/static/home/step_3/step_3_4.png";
import logo5 from "@/static/home/step_3/step_3_5.png";
import logo6 from "@/static/home/step_3/step_3_6.png";

import sport1 from "@/static/home/step_3/step_3_21.png";
import sport2 from "@/static/home/step_3/step_3_22.png";
import sport3 from "@/static/home/step_3/step_3_23.png";
import sport4 from "@/static/home/step_3/step_3_24.png";
import sport5 from "@/static/home/step_3/step_3_25.png";
import sport6 from "@/static/home/step_3/step_3_26.png";

import game1 from "@/static/home/step_3/step_3_31.png";
import game2 from "@/static/home/step_3/step_3_32.png";
import game3 from "@/static/home/step_3/step_3_33.png";
import game4 from "@/static/home/step_3/step_3_34.png";
import game5 from "@/static/home/step_3/step_3_35.png";
import game6 from "@/static/home/step_3/step_3_36.png";

export function useStep3() {
  const brandLogos = [logo1, logo2, logo3, logo4, logo5, logo6];
  const sportsGames = [sport1, sport2, sport3, sport4, sport5, sport6];
  const boardGames = [game1, game2, game3, game4, game5, game6];

  const brandLogosLoop = [...brandLogos, ...brandLogos];
  const sportsGamesLoop = [...sportsGames, ...sportsGames];
  const boardGamesLoop = [...boardGames, ...boardGames];

  return {
    brandLogos,
    sportsGames,
    boardGames,
    brandLogosLoop,
    sportsGamesLoop,
    boardGamesLoop,
  };
}
