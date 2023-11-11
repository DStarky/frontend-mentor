import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			src: '/src',
		},
	},
	plugins: [react(), svgr()],
});