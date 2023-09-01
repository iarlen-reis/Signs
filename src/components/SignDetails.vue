<script setup lang="ts">
defineProps({
  name: String,
  period: String
})
</script>

<template>
  <div class="sign__details">
    <h1>{{ name }}</h1>
    <span>{{ period }}</span>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
@use '@/assets/scss/mixins.scss' as *;

.sign__details {
  display: flex;
  text-align: center;
  flex-direction: column;

  h1 {
    font-size: $size-4xl;
    font-family: $font-title;
  }

  span {
    font-size: $size-xl;
  }

  @include tablet {
    h1 {
      font-size: $size-5xl;
    }

    span {
      font-size: $size-2xl;
    }
  }

  @include desktop {
    text-align: start;
  }
}
</style>
