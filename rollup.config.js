import commonjs from '@rollup/plugin-commonjs'
import node from '@rollup/plugin-node-resolve'


// rollup.config.js
const config = {
    input: 'src/index.js',
    output: {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'MyModuleName',
    },
    plugins: [node(), commonjs()],
  };
  
  export default config;