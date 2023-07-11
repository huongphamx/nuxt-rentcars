// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: ['nuxt-vuefire', "@unocss/nuxt"],

  vuefire: {
    auth: true,
    config: {
      apiKey: "AIzaSyCeOXaWw4JseqBjboyK91fzNP1RKU5Xus4",
      authDomain: "sample-django-ae14d.firebaseapp.com",
      projectId: "sample-django-ae14d",
      storageBucket: "sample-django-ae14d.appspot.com",
      messagingSenderId: "929995888235",
      appId: "1:929995888235:web:3425d2ac89a33bb9ba832e",
      measurementId: "G-3SNL86G6LH"
    }
  },

  css: [
    "primevue/resources/themes/mdc-light-indigo/theme.css",
    "~/assets/css/main.css"
  ],

  build: {
    transpile: ["primevue"]
  }
})
