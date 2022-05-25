export function transformToDataURL(svg) {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
