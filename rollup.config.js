import buble from 'rollup-plugin-buble';

export default {
  entry: 'index.js',
  format: 'cjs',
  plugins: [
		buble({
			jsx: "h"
		})
	],
  dest: 'bundle.js'
};