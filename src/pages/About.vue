<template>
  <div class="sub_page">
    <div class="hero_area">
        <Header></Header>
    </div>
    <About></About>
    <Info></Info>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    About,
    Footer,
  },
};
</script>