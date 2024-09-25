<template>
    <Hero></Hero>
    <Service></Service>
    <About></About>
    <ChooseUs></ChooseUs>
    <OurTeam></OurTeam>
    <Client></Client>
    <!-- <Info></Info> -->
    <Footer></Footer>
</template>
<script>
import Hero from "@/components/Hero.vue";
import Service from "@/components/Service.vue";
import About from "@/components/About.vue";
import ChooseUs from "@/components/ChooseUs.vue";
import OurTeam from "@/components/OurTeam.vue";
import Client from "@/components/Client.vue";
// import Info from "@/components/Info.vue";
import Footer from "@/components/Footer.vue";
import NotFound from "@/pages/NotFound.vue";
export default {
  name: "App",
  components: {
    Hero,
    Service,
    About,
    ChooseUs,
    OurTeam,
    Client,
    // Info,
    Footer,
    NotFound
  },
};
</script>