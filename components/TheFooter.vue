<script setup>

</script>


<template>
  <section class="">
    <Divider />
    <div class="m-container flex flex-col lg:flex-row">
      <div id="footer-contact" class="mb-5 columns-1 md:columns-3 lg:columns-1 lg:w-1/4">
        <div id="logo"><img src="/nuxt-icon.svg" style="height: 2.6rem;"></div>
        <div id="phone-email">
          <div>Phone</div>
          <div>email</div>
        </div>
        <div id="social">social</div>
      </div>
      <div id="footer-nav" class="text-sm columns-1 md:columns-4 lg:w-3/4">
        <div>Chinh sach va quy dinh</div>
        <div>col1</div>
        <div>col1</div>
        <div>col1</div>
      </div>
    </div>
  </section>
</template>


<style scoped lang="scss">
#footer-contact {
  border: 1px solid blue;

  #logo {
    border: 1px solid blueviolet;
  }

  #phone-email {
    border: 1px solid blueviolet;
  }

  #social {
    border: 1px solid blueviolet;
  }
}

#footer-nav {
  border: 1px solid yellow;

  &:nth-child(1) {
    border: 1px solid blueviolet;
  }
}
</style>