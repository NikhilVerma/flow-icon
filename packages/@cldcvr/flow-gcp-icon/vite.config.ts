import { defineConfig } from "vite";

	  export default defineConfig({
		build: {
		  lib: {
			entry: "index.ts",
			name: "@cldcvr/flow-gcp-icon",
			fileName: (format) => `flow-icon.${format}.js`,
			formats: ["es"],
		  },
		  // outDir: "dist",
		  rollupOptions: {
			external: ["@cldcvr/flow-core"],
			output: {
			  globals: {
				"@cldcvr/flow-core": "@cldcvr/flow-core",
			  },
			},
		  },
		},
	  });