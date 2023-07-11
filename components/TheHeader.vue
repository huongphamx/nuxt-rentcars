<script setup lang="ts">

</script>


<template>
  <div class="m-container h-[88px] flex justify-between items-center">
    <span class="text-3xl">
      <img src="/nuxt-icon.svg" style="height: 2rem;">
      NUXTCARS
    </span>
    <div id="menu-links" class="flex items-center gap-2">
      <div class="hidden md:flex items-center">
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/become-partner">Become Partner</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
        <Divider layout="vertical" />
      </div>
      <div class="hidden lg:flex">
        <Button label="Login" text />
        <Button label="Signup" outlined />
      </div>
      <div class="lg:hidden"><Button icon="pi pi-bars" size="large" text /></div>
    </div>
  </div>
</template>

<style scoped>
a {
  padding: 0 20px;
}
</style>