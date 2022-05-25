export function transformToDataURLBase64(svg: string) {
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}
