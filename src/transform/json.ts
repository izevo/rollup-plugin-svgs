import { parse } from 'svgson';
import { exportJS } from '../utils/export_js';

export async function transformToJSON(svg: string) {
  const json = await parse(svg);
  return exportJS(json);
}
