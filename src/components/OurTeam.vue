<template>
  <!-- team section -->
  <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">Our <span> Team</span></h2>
      </div>

      <div class="team_container">
        <div class="row">
          <TeamCard
            v-for="(item, index) in teamData"
            :key="index"
            :image="item.image"
            :name="item.name"
            :title="item.title"
            :nameurl="item.nameurl"
          ></TeamCard>
          <!-- <div class="col-lg-3 col-sm-6">
            <div class="box ">
              <div class="img-box">
                <img src="images/team-1.jpg" class="img1" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Joseph Brown
                </h5>
                <p>
                  Marketing Head
                </p>
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
          </div> -->
        </div>
      </div>
    </div>
  </section>
  <!-- end team section -->
</template>

<script>
import TeamCard from "@/components/sub_components/TeamCard.vue";
export default {
  components: {
    TeamCard,
  },
  data() {
    return {
      teamData: [
        {
          image: "images/team-1.jpg",
          name: "Hello",
          title: "Hello",
          nameurl: "name1-url",
        },
        {
          image: "images/team-1.jpg",
          name: "Hello",
          title: "Hello",
          nameurl: "name2-url",
        },
        {
          image: "images/team-1.jpg",
          name: "Hello",
          title: "Hello",
          nameurl: "name3-url",
        },
        {
          image: "images/team-1.jpg",
          name: "Hello",
          title: "Hello",
          nameurl: "name4-url",
        },
      ],
    };
  },
};
</script>