// Vite config file; shares some options with Rollup.
// This could be written simply as export default {...},
// but using defineConfig will provide Intellisense support
// in editors like VSCode for useful typehints, etc.
import { defineConfig } from 'vite';
import commonjsExternals from 'vite-plugin-commonjs-externals';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig( {
	build: {
		rollupOptions: {
			input: {
				// Do this for each module you want to output;
				// the output bundle will live at:
				// resources/dist/ext.buildSandbox.[key].js
				main: 'resources/src/main.js'
			},

			output: {
				dir: 'resources/dist',
				format: 'iife',
				entryFileNames: 'ext.buildSandbox.[name].js',
				globals: {
					jquery: '$'
				}
			},

			external: [ 'jquery', 'vue' ]
		},

		manifest: true,
		minify: false,
		target: 'es2015'
	},
	plugins: [
		createVuePlugin(),
		commonjsExternals( {
			externals: [ 'vue' ]
		} )
	]
} );
