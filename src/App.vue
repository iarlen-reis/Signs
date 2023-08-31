<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderVue from './components/Header.vue'
import FooterVue from './components/Footer.vue';
</script>

<template>
  <HeaderVue />
  <main class="main__content">
    <RouterView />
  </main>
  <FooterVue />
</template>

<style lang="scss">
@use './assets/scss/variables.scss' as *;
@use './assets/scss/mixins.scss' as *;
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  @include background;
  font-family: $font-body;
}

.main__content {
  width: 100%;
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 1rem;
}
</style>
