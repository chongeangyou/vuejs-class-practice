<template>
  <div class="sub_page">
    <div class="hero_area">
        <Header></Header>
    </div>
    <div class="container">
        <h2 class="text-center pt-3 pb-5">Welcome to Vue JS course</h2>
    <div class="row">
      <CardCourse v-for="(item, index) in courses" :key="index"
        :title="item.title"
        :short-description="item.shortDescription"
        :url="item.titleURL"
      >
      <template v-if="index%2 !==0" v-slot:add>
        <button>Add</button>
    </template>
    </CardCourse>
   
    </div>
  </div>
  </div>
  
</template>

<script setup>
import CardCourse from "@/components/sub_components/CardCourse.vue";
import Header from "@/components/Header.vue";
//import Footer from "@/components/Footer.vue"
import axios from "axios";
import { ref, onMounted } from 'vue'
var courses = ref([]);

onMounted(async ()=>{
  const url = "/v1/courses"; // link call from API,
    const response = await axios.get(url); // Promise and async
    const course = response.data;
    courses.value = course;
    console.log(courses);
});

</script>

<!-- <script>
import CardCourse from "@/components/sub_components/CardCourse.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue"
import axios from "axios";
export default {
  components: { Header,CardCourse, Footer },
  data() {
    return {
      //courses: [(title = "Hello"), (shortDescription = ""), (titleUrl = "")],
      courses: [],
    };
  },
  async created() {
    const url = "/v1/courses"; // link call from API,
    const response = await axios.get(url); // Promise and async
    const courses = response.data;
    this.courses = courses;
    console.log(courses);
  },
};
</script> -->