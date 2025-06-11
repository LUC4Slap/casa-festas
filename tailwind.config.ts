import { type Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './nuxt.config.ts',
    './node_modules/@nuxt/ui/dist/**/*.{js,ts,vue}', // obrigatório para Nuxt UI funcionar
  ],
  theme: {
    extend: {},
  },
  presets: [require('@nuxt/ui/tailwind/preset')], // <-- ESSENCIAL
};

export default config;
