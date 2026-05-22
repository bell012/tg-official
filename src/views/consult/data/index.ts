import type { ConsultArticle } from "../articles";
import { consultAllArticles, getArticleById } from "../articles";
import { getDetailH5Hero, getDetailPcHero } from "../detailHeroes";
import type { ConsultArticleDetail } from "./types";
import { detail as detail01 } from "./details/01";
import { detail as detail02 } from "./details/02";
import { detail as detail03 } from "./details/03";
import { detail as detail04 } from "./details/04";
import { detail as detail05 } from "./details/05";
import { detail as detail06 } from "./details/06";
import { detail as detail07 } from "./details/07";
import { detail as detail08 } from "./details/08";
import { detail as detail09 } from "./details/09";
import { detail as detail10 } from "./details/10";
import { detail as detail11 } from "./details/11";
import { detail as detail12 } from "./details/12";
import { detail as detail13 } from "./details/13";
import { detail as detail14 } from "./details/14";
import { detail as detail15 } from "./details/15";
import { detail as detail16 } from "./details/16";
import { detail as detail17 } from "./details/17";
import { detail as detail18 } from "./details/18";

const detailMap: Record<number, ConsultArticleDetail> = {
  1: detail01,
  2: detail02,
  3: detail03,
  4: detail04,
  5: detail05,
  6: detail06,
  7: detail07,
  8: detail08,
  9: detail09,
  10: detail10,
  11: detail11,
  12: detail12,
  13: detail13,
  14: detail14,
  15: detail15,
  16: detail16,
  17: detail17,
  18: detail18,
};

export interface ConsultDetailViewModel extends ConsultArticleDetail {
  pcImage: string;
  h5Image: string;
}

export function getArticleDetail(id: number): ConsultDetailViewModel | null {
  const detail = detailMap[id];
  const article = getArticleById(id);
  const pcHero = getDetailPcHero(id);
  const h5Hero = getDetailH5Hero(id);
  if (!detail || !article || !pcHero || !h5Hero) return null;
  return {
    ...detail,
    pcImage: pcHero,
    h5Image: h5Hero,
  };
}

export interface RelatedArticleItem extends ConsultArticle {
  displayDate: string;
}

function shufflePick<T>(items: T[], count: number): T[] {
  const pool = [...items];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

export function getRelatedArticles(
  currentId: number,
  count = 5
): RelatedArticleItem[] {
  const candidates = consultAllArticles.filter((item) => item.id !== currentId);
  return shufflePick(candidates, count).map((item) => ({
    ...item,
    displayDate: detailMap[item.id]?.publishedAt ?? "2026年1月4日",
  }));
}

export type { ConsultArticleDetail, ContentBlock } from "./types";
