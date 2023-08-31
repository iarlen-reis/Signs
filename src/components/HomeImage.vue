<script setup lang="ts">
import SpaceImage from '@/assets/space.png'
</script>

<template>
  <div class="home__image">
    <img :src="SpaceImage" alt="imagem do espaço" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
@use '@/assets/scss/mixins.scss' as *;
.home__image {
  width: 100%;
  max-width: 300px;

  margin: 0 auto;

  img {
    width: 100%;
  }

  @include tablet {
    max-width: 500px;
  }
}
</style>
