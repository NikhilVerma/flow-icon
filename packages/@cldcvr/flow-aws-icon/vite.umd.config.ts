import { defineConfig } from "vite";

	  export default defineConfig({
		build: {
		  lib: {
			entry: "index.ts",
			name: "@cldcvr/flow-aws-icon",
			fileName: (format) => `flow-icon.${format}.js`,
			formats: ["umd"],
		  },
		   outDir: "umd",
		  rollupOptions: {
			external: ["@cldcvr/flow-core"],
			output: {
			  globals: {
				"@cldcvr/flow-core": "flowCore",
			  },
			},
		  },
		},
	  });