<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <div class="container-fluid d-flex justify-content-between">
    <a class="navbar-brand" href="#">Alfatonics</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

        <li class="nav-item"> 
          <router-link to="/home" class="nav-link active" >Home</router-link>
        </li>

        <li class="nav-item">
          <router-link to="/our-division" class="nav-link" >Our division</router-link>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Events
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li>
            
              <router-link to="/past-event" class="dropdown-item" >Past events</router-link>
          </li>

            <li>
              <router-link to="/up-coming" class="dropdown-item" >Up coming event</router-link>
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <router-link to="/shop" class="nav-link" >Shop</router-link>
        </li>
        </ul>
    </div>
  </div>
</nav>
</template>

<script setup>

</script>
