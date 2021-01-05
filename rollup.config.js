import commonjs from '@rollup/plugin-commonjs'
import node from '@rollup/plugin-node-resolve'


// rollup.config.js
const config = {
    input: ['src/index.js'],
    output: {
      dir: 'dist/js',
      format: 'umd',
      name: 'MyModuleName',
    },
    plugins: [node(), commonjs()],
  };
  
  export default config;