import { exportJS } from '../utils/export_js';

export function transformToDataURLBase64(svg: string) {
  return exportJS(`data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`);
}
