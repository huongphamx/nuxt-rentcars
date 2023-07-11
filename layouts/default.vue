<script setup>
import TheHeader from '../components/TheHeader.vue';


</script>


<template>
  <div>
    <TheHeader />
    <div class="m-container my-5">
      <slot />
    </div>
    <TheFooter />
  </div>
</template>

