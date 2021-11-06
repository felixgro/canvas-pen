const path = require('path');
const { defineConfig } = require('vite');
const dts = require('vite-plugin-dts');

module.exports = defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/Pen.ts'),
			name: 'Pen',
			fileName: (format) => `pen.${format}.js`,
		},
	},
	plugins: [dts()],
});
