<template>
  <div class="sub_page">
    <div class="hero_area">
      <Header></Header>
    </div>
    <div class="row">
        <CardCourse v-for="(item, index) in courses" :key="index" 
        :title="item.title" 
        :shortDescription="item.shortDescription"
        :url="item.titleURL"
        ></CardCourse>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import CardCourse from "@/components/sub_components/CardCourse.vue";
import useRepostsitoryStore from "@/store/respository.js";
import { mapActions, mapState } from "pinia";
export default {
  components:{
    Header,
    Footer,
    CardCourse
  },
  created() {
    this.getAllRepositories();
    console.log(this.courses);
  },
  computed: {
    ...mapState(useRepostsitoryStore, ["courses"]),
  },
  methods: {
    ...mapActions(useRepostsitoryStore, ["getAllRepositories"]),
  },
};
</script>