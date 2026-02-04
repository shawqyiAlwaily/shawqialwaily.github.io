import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	base: "/", // ← ADD THIS LINE (fixes path issues)
	server: {
		host: "0.0.0.0",
		port: Number(process.env.PORT) || 5174,
	},
	plugins: [react(), mode === "development" && componentTagger()].filter(
		Boolean,
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
