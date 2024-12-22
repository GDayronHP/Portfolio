export default defineConfig({
  site: "https://gdayronhp.github.io",
  base: '/Portfolio',
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@assets': '/src/assets',
      },
    },
  },
});
