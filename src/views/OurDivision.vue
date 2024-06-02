<template>
  <div class="">
    <div class="container-fluid" >
        <!-- About 1 - Bootstrap Brain Component -->
<section class="container my-3">
   
    <div class="row align-items-center justify-center">
        <div v-for="item in 3" :key="item" class="col-lg-4 col-md-6 col-sm-12 card margin" style="height: 100%;">
          <img src="/who_are_we.jpg" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Drons making and monitoring</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Register to the upcoming event</a>
          </div>
        </div>
  </div>
</section>
  </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.margin{
  border: 5px solid #f7f4f4;
}

</style>