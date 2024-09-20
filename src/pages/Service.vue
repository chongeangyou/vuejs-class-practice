<template>
    <div class="sub_page">
        <div class="hero_area">
            <Header></Header>
        </div>
        <Service></Service>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Service from '@/components/Service.vue';
import Footer from '@/components/Footer.vue'
export default {
    components:{
        Header,
        Service,
        Footer
    }
}
</script>