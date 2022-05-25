const svgs = require('../dist');

module.exports = {
  input: 'test/index.ts',
  output: {
    dir: 'test',
  },
  plugins: [
    svgs({
      include: /\.svg\?react/,
      type: 'react',
    }),
    svgs({
      include: /\.svg\?json/,
      type: 'json',
    }),
    svgs({
      include: /\.svg\?data/,
      type: 'data-url',
    }),
    svgs({
      include: /\.svg\?base64/,
      type: 'data-url-base64',
    }),
    svgs(),
  ]
}
