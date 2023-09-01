<script setup lang="ts">
defineProps({
  image: String,
  name: String
})
</script>

<template>
  <div class="sign__image">
    <img :src="image" :alt="name" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
@use '@/assets/scss/mixins.scss' as *;

.sign__image {
  width: 100%;
  max-width: 300px;
  max-height: fit-content;
  margin: 0 auto;

  img {
    width: 100%;
  }

  @include desktop {
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    img {
      transition: all 0.4s;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
