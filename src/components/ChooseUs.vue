<template>
  <!-- why section -->

  <section class="why_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>Why Choose <span>Us</span></h2>
      </div>
      <div class="why_container">
        <ChooseCard
          v-for="(item, index) in chooseData"
          :key="index"
          :image="item.image"
          :title="item.title"
          :description="item.description"
        ></ChooseCard>
      </div>
      <div class="btn-box">
        <a href=""> Read More </a>
      </div>
    </div>
  </section>

  <!-- end why section -->
</template>

<!-- this is use composition style  -->
<script setup>
import { reactive } from "vue";
import ChooseCard from "@/components/sub_components/ChooseCard.vue";

const chooseData = reactive([
  {
    image: "images/w1.png",
    title: "Happy Customers",
    description:
      "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus",
  },
  {
    image: "images/w2.png",
    title: "Happy Customers",
    description:
      "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus",
  },
  {
    image: "images/w3.png",
    title: "Happy Customers",
    description:
      "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus",
  },
  {
    image: "images/w4.png",
    title: "Happy Customers",
    description:
      "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus",
  },
  {
    image: "images/w4.png",
    title: "Happy Customers",
    description:
      "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus",
  }]
);

</script>

<!-- script without compostion, use it as normal -->

<!-- <script>
import ChooseCard from './sub_components/ChooseCard.vue'

export default {
    components:{
        ChooseCard
    },
    data(){
        return {
            chooseData: [
                {
                    image:'images/w1.png',
                    title:'Happy Customers',
                    description:'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus'
                },
                {
                    image:'images/w2.png',
                    title:'Happy Customers',
                    description:'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus'
                },
                {
                    image:'images/w3.png',
                    title:'Happy Customers',
                    description:'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus'
                },
                {
                    image:'images/w4.png',
                    title:'Happy Customers',
                    description:'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus'
                },
                {
                    image:'images/w4.png',
                    title:'Happy Customers',
                    description:'Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus'
                },
            ]
        }
    }
}
</script> -->