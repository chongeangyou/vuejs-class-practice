<template>
  <Info></Info>
  <!-- footer section -->
  <section class="footer_section">
    <div class="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </section>
  <!-- footer section -->
</template>
<script>
import Info from "@/components/Info.vue";
export default {
  components: {
    Info,
  },
};
</script>