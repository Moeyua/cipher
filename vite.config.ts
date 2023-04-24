import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/main.ts"),
      name: "Cipher",
      fileName: "cipher",
      formats: ["es", "umd", "cjs"],
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [""],
      output: {},
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      outputDir: ["dist", "types"],
    }),
  ],
});
