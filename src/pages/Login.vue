<template>
  <div class="sub_page">
    <div class="hero_area">
      <Header></Header>
    </div>
    <div class="row">
      <div class="col-xxl-4 col-lg-4 col-md-6 mt-5 mb-5"></div>
      <div class="col-xxl-4 col-lg-4 col-md-6 mt-5 mb-5">
        <Form @submit="handleSubmit">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="Form-label"
              >Email address</label
            >
            <Field
              name="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              :rules="emailRule"
              v-model="email"
            />
            <ErrorMessage name="email" />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <Field
              name="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              :rules="passwordRule"
              v-model="password"
            />
            <ErrorMessage name="password" />
          </div>
          <div class="mb-3 form-check">
            <!-- <Field
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            /> -->
            <label class="form-check-label" for="exampleCheck1"
              >Check me out</label
            >
          </div>
          <div v-if="error" class="alert alert-danger" role="alert">
            A simple danger alert—check it out!
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </Form>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import axios from "axios";
export default {
  components: {
    Header,
    Footer,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      email: "",
      password: "",
      error: false,
      sucess: false,
      emailRule: Yup.string().email().required(),
      passwordRule: Yup.string().min(6).required(),
    };
  },
  methods: {
    resetData() {
      this.email = "";
      this.password = "";
    },

    async handleSubmit() {
      try {
        const response = await axios.post("/v1/auth/login/", {
          email: this.email,
          password: this.password,
        });
        localStorage.setItem("accessToken", response.data.accessToken);
        this.error = false;
        this.resetData();
        console.log(response.data);
      } catch (error) {
        console.log("Login Error");
        this.resetData;
        this.error = true;
      }
    },
  },
};
</script>

<style>
</style>