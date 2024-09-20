<template>
<div class="col-md-6">
          <div class="img-box">
            <img :src="image" alt="" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <h3>{{title}}</h3>
            <p>
              {{description}}
            </p>
            <p>
              {{description}}
            </p>
            <a href=""> Read More </a>
          </div>
        </div>
</template>
<script>
export default {
    props:['image', 'title', 'description']
}
</script>