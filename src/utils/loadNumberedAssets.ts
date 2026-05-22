/** 从 import.meta.glob 结果中按文件名序号加载资源，如 article-01.webp → 1 */
export function loadNumberedAssets(
  modules: Record<string, unknown>,
  pattern: RegExp
): Record<number, string> {
  const result: Record<number, string> = {};

  for (const [path, url] of Object.entries(modules)) {
    const match = path.match(pattern);
    if (match) {
      result[Number(match[1])] = url as string;
    }
  }

  return result;
}

/** 按序号 1..count 取出资源 URL，缺失时抛出明确错误 */
export function getNumberedAsset(
  map: Record<number, string>,
  id: number,
  label: string
): string {
  const asset = map[id];
  if (!asset) {
    throw new Error(`Missing ${label} asset for id ${id}`);
  }
  return asset;
}
