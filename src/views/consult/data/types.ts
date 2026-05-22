export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "subheading"; text: string }
  | { type: "bulletList"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "codeBlock"; text: string };

export interface ConsultArticleDetail {
  id: number;
  title: string;
  author: "TG官网";
  publishedAt: string;
  content: ContentBlock[];
}
