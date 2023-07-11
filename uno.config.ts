import { defineConfig, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(),
  ],

  shortcuts: {
    'm-container': 'w-full sm:max-w-[480px] md:max-w-[720px] lg:max-w-[960px] 2xl:max-w-[1280px] mx-auto',
  }
})