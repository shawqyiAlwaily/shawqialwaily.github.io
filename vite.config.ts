import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	server: {
		host: "0.0.0.0",
		// prefer explicit PORT env var, fallback to 5174 per request
		port: Number(process.env.PORT) || 5174,
	},
	plugins: [react(), mode === "development" && componentTagger()].filter(
		Boolean
	),
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					react: ["react", "react-dom"],
					three: ["three", "@react-three/fiber", "@react-three/drei"],
				},
			},
		},
	},
}));
