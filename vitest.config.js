// import { defineConfig } from "vitest/config";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     environment: "jsdom",

//     // ✅ FIX IS HERE
//     include: ["./src/test/**/*.test.{js,jsx}"],

//     setupFiles: "./src/test/setup.js",
//   },
//   resolve: {
//     alias: {
//       "@": "/src",
//     },
//   },
// });

import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
      environment: "jsdom",
      
    globals: true,

    include: ["./src/test/**/*.test.{js,jsx}"],
    setupFiles: "./src/test/setup.js",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
