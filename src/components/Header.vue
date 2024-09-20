<template>
    <!-- header section strats -->
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index.html">
            <span> Finexo </span>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item" :class="{active: $route.path == '/'}">
                <router-link class="nav-link" to="/">  {{ $t('home') }} <span class="sr-only">(current)</span></router-link>
              </li>
              <li class="nav-item" :class="{active: $route.path =='/about'}">
                <router-link class="nav-link" to="/about"> About</router-link>
              </li>
              <li class="nav-item" :class="{active: $route.path == '/service'}">
                <router-link class="nav-link" to="/service">Services</router-link>
              </li>
              <li class="nav-item" :class="{active: $route.path == '/choose_us'}">
                <router-link class="nav-link" to="/choose_us">Why Us</router-link>
              </li>
              <li class="nav-item" :class="{active: $route.path =='/team'}">
                <router-link class="nav-link" to="/team">Team</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/register">
                   Register</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/repos">
                   GetRepos</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/course">
                   Courses</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/login">
                  <i class="fa fa-user" aria-hidden="true"></i> Login</router-link
                >
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/user">
                  <i class="fa fa-user" aria-hidden="true"></i> User</router-link
                >
              </li>
              <li class="nav-item">
                <button @click="changeLocale" class="btn btn-info rounded">{{ $t('btn_lang') }}</button>
              </li>
              <!-- <form class="form-inline">
                <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </form> -->
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <!-- end header section -->
</template>


<script>
export default {
  methods:{
    changeLocale(){
      if(this.$i18n.locale == 'en'){
        this.$i18n.locale = 'khm'
      }else{
        this.$i18n.locale = 'en'
      }
    }
  }
}
</script>