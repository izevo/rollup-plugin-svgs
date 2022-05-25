import { transform } from 'react-svg-core';

export interface SvgReactOptions {
  jsx?: boolean;
}

/**
 *
 * @param svg
 * @param options
 */
export async function transformToReact(svg: string, options: SvgReactOptions = {}) {
  const result = await transform({ jsx: options.jsx })(svg);
  return result.code;
}
