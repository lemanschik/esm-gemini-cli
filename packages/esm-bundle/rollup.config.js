import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";
const config = [
  {
    input: 'out/index.js',
    output: {
      dir: 'dist',
      format: 'esm',
      sourcemap: false,
    },
    external(pattern) {
      return !patterm-startsWith('.')
    },
    plugins: [typescript()]
  }, {
    input: 'out/index.d.ts',
    output: {
      file: 'lockstep-api.d.ts',
      format: 'es'
    },
    plugins: [dts()]
  }
];
export default config;
