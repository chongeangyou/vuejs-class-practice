<template>
  <!-- about section -->

  <section class="about_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>About <span>Us</span></h2>
        <p>
          {{ $t('welcome') }}
        </p>
      </div>
      <div class="row">
        <AboutElement
          v-for="(item, index) in aboutData"
          :key="index"
          :image="item.image"
          :title="item.title"
          :description="item.description"
        ></AboutElement>
      </div>
    </div>
  </section>

  <!-- end about section -->
</template>
<script>
import AboutElement from "@/components/sub_components/AboutElement.vue";
export default {
  components: {
    AboutElement,
  },
  data() {
    return {
      aboutData: [
        {
          image: "images/about-img.png",
          title: "We Are Finexo",
          description: "Hellddldlldldkkdjkdkdk",
        },
      ],
    };
  },
};
</script>