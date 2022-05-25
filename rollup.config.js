const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { babel } = require('@rollup/plugin-babel');

module.exports = {
  input: 'src/index.ts',
  output: {
    sourcemap: true,
    format: 'commonjs',
    dir: 'dist'
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.ts'],
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.js', '.ts'],
    }),
  ],
  external: /node_modules/,
}
