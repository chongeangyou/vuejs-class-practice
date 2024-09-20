<template>
  <div class="sub_page">
    <div class="hero_area">
        <Header></Header>
    </div>
    <h1>{{dataDetail.title}}</h1>
    <p>{{ dataDetail.shortDescription }}</p>
    <button @click="goHome">go-home</button>
    <Footer></Footer>
</div>
  
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
   components: {Header, Footer},
   data(){
    return{
        dataDetail:[]
    }
   },
   async created(){
    const url = "/v1/courses/" + this.$route.params.id; // link call from API,
    console.log(url);
    const response = await axios.get(url);
    const detailResource = response.data;
    this.dataDetail = detailResource;
    console.log(detailResource);

   },
   methods:{
    goHome(){
        this.$router.push('/');
    }
   }


}
</script>

<style>

</style>