<template>
  <div class="col-xxl-3 col-lg-3 col-md-3 pt-3">
    <div class="card" style="width: 18rem">
      <img src="https://picsum.photos/200/100" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">
          {{ shortDescription }}
        </p>
        <router-link :to="`/course/${url}`" class="btn btn-primary">{{ url }}</router-link>
      </div>
      <slot name="add"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ["title", "url", "shortDescription"],
};
</script>