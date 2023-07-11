import PrimeVue from "primevue/config";
import Button from "primevue/button";
import Divider from "primevue/divider"

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue)
  nuxtApp.vueApp.component("Button", Button);
  nuxtApp.vueApp.component("Divider", Divider);
})
