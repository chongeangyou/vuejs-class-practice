<template>
  <h1>Hello user auth</h1>
  <div class="row">
    <div class="col-lg-3 col-sm-6" v-for="(item, index) in users" :key="index">
    <div class="box">
      <div class="img-box">
        <!-- <img :src="image" class="img1" alt=""> -->
      </div>
      <div class="detail-box">
        <p>{{ item.firstname }} {{ item.lastname }}</p>
       
          
      </div>
      <div class="social_box">
        <a href="#">
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="#">
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    const token = localStorage.getItem("accessToken");
    const response = await axios.get("/v1/users", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    this.users = response.data;
    console.log(response.data);
  },
};
</script>

<style>
</style>