<script setup lang="ts">
import HomeApresentation from '@/components/HomeApresentation.vue'
import HomeDetails from '@/components/HomeDetails.vue'
import HomeImage from '@/components/HomeImage.vue';
</script>

<template>
  <div class="home">
    <div>
      <HomeApresentation />
      <HomeDetails />
    </div>
    <HomeImage />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
@use '@/assets/scss/mixins.scss' as *;
.home {
  display: grid;
  grid-template-columns: 1fr;

  @include desktop {
    grid-template-columns: 1fr 1fr;
  }
  gap: $gap-1;
  margin-top: 1rem;
}
</style>
