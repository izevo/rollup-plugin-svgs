import { createFilter } from 'rollup-pluginutils';

import * as fs from 'fs';
import { promisify } from 'util';
import { OptimizeOptions } from 'svgo';
import { optimize } from 'react-svg-core';
import {
  SvgReactOptions,
  transformToDataURL,
  transformToDataURLBase64,
  transformToJSON,
  transformToReact
} from './transform';
import { removeQuery } from './utils/remove_query';

const readFile = promisify(fs.readFile);

interface SvgsOptions extends SvgReactOptions {
  type: 'react' | 'json' | 'data-url' | 'data-url-base64',
  include?: Array<string | RegExp> | string | RegExp | null,
  exclude?: Array<string | RegExp> | string | RegExp | null,
  svgo?: OptimizeOptions,
}

/**
 *
 * @param options
 */
export default function svgs(options: SvgsOptions) {
  const filter = createFilter(options.include, options.exclude);

  function optimizeSvg(svg: string) {
    return optimize(options.svgo)(svg);
  }

  function transformSvg(svg: string) {
    const transform = {
      'react': transformToReact,
      'json': transformToJSON,
      'data-url': transformToDataURL,
      'data-url-base64': transformToDataURLBase64,
    }[options.type || 'data-url'];

    return transform(svg, options);
  }


  return {
    name: 'svgs',
    load(id) {
      if (!filter(id)) {
        return;
      }

      return readFile(removeQuery(id))
      .then(String)
      .then(optimizeSvg)
      .then(transformSvg);
    },
  };
}
