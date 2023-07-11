<script setup>
import TheHeader from '../components/TheHeader.vue';


</script>


<template>
  <div>
    <TheHeader />
    <div class="max-w-[1280px] mx-auto my-5">
      <slot />
    </div>
  </div>
</template>

