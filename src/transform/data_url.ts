import { exportJS } from "../utils/export_js";

export function transformToDataURL(svg) {
  return exportJS(`data:image/svg+xml,${encodeURIComponent(svg)}`);
}
