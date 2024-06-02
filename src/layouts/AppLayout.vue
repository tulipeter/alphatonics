<template>
  <div class="container-fluid">
   <NavBarComponent/>

    <div class="container">
        <RouterView />
    </div>

    <FooterComponent/>

  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'

import NavBarComponent from '@/components/NavBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>
