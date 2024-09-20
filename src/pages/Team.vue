<template>
    
    <div class="sub_page">
        <div class="hero_area">
            <Header></Header>
        </div>
        <router-view></router-view>
        <!-- <OurTeam></OurTeam> -->
        <Footer></Footer>
    </div>
   
</template>

<script>
import Header from '@/components/Header.vue';
import OurTeam from '@/components/OurTeam.vue';
import Footer from '@/components/Footer.vue';
export default {
    components:{
        Header, OurTeam, Footer
    }
}
</script>