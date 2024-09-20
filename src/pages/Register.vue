<template>
  <div class="sub_page">
    <div class="hero_area">
      <Header></Header>
    </div>
    <div class="container pt-5 pb-5">
      <form @submit.prevent="handleRegister" class="g-3">
        <div class="col-md-4">
          <label for="" class="form-label">First name</label>
          <input type="text" name="firstName" class="form-control" id="" />
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-4">
          <label class="form-label">Last name</label>
          <input
            type="text"
            name="lastName"
            class="form-control"
            id="validationTooltip02"
            value="Otto"
            required
          />
          <div class="valid-tooltip">Looks good!</div>
        </div>
        <div class="col-md-4 e">
          <label for="validationTooltipUsername" class="form-label"
            >Username</label
          >
          <div class="input-group">
            <span class="input-group-text" id="v">@</span>
            <input
              type="text"
              class="form-control"
              id="validationTooltipUsername"
            />
          </div>
        </div>
        <div class="col-md-4">
          <label for="inputAddress2">file</label>
          <input
            @change="onFileChange"
            type="file"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
      </form>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      firstName:'',
      lastName:'',
      username:'',
      cvFile: "",
    };
  },
  methods: {
    onFileChange(event) {
      console.log(event.target.files);
      this.cvFile = event.target.files[0];
      console.log(this.cvFile);
    },
    async handleRegister() {
      if (this.cvFile) {
        console.log("do sth");
        const form = new FormData();
        form.append =('firstName', this.firstName);
        form.append = ('lastName', this.lastName);
        form.append = ('username', this.username);
        form.append("file", this.cvFile);
        try {
          const result = await axios.post(
            "http://172.23.128.93:3000/upload-single",
            form,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
          console.log(result);
        } catch (error) {
          alert(error.message);
        }
      } else {
        alert("No File Provided!");
      }
    },
  },
};
</script>

<style>
</style>