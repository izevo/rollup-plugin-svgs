# rollup-plugin-svgs
A rollup plugin transform SVG into common formats

## Install

```
npm install rollup-plugin-svgs -D

// Or

yarn add rollup-plugin-svgs -D
```

## Usage

```
import svgs from '@rollup/plugin-node-resolve';

export default {
  plugins: [
    svgs()
  ]
}
```

## Options

### type

Type: `'react' | 'json' | 'data-url' | 'data-url-base64'`  
Default: `'react'`

### svgs

Type: `Object`
Default: `{}`

See: [svgo Configuration](https://www.npmjs.com/package/svgo#Configuration)

### include

Type: RegExp

### exclude

Type: RegExp
