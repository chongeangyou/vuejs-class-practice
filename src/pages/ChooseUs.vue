<template>
    <div class="sub_page">
        <div class="hero_area">
            <Header></Header>
        </div>
        <ChooseUs></ChooseUs>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ChooseUs from '@/components/ChooseUs.vue';
import Footer from '@/components/Footer.vue';
   export default{
    components:{
        Header,
        ChooseUs,
        Footer
    }
   }
</script>