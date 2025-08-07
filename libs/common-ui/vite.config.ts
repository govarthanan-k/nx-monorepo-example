import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import dts from "vite-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";
// import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.app.json",
      rollupTypes: true,
    }),
    visualizer({ open: false }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      // entry: "src/index.ts", // Simple relative path
      // entry: resolve(fileURLToPath(new URL('.', import.meta.url)), 'src/index.ts'),
      name: "GovaUI",
      formats: ["es"],
      fileName: (format) => `my-component-library.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
