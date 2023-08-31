<script setup lang="ts"></script>

<template>
  <div class="home__apresentation">
    <span>Os opostos se atraem! 💕</span>
    <h1>Signs & Horoscopes</h1>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
@use '@/assets/scss/mixins.scss' as *;

.home__apresentation {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $gap-1;

  span {
    width: fit-content;
    font-size: $size-base;
    padding: 0.4rem 0.8rem;
    border-radius: 8px;
    color: $color-white;
    background: $color-link;
  }

  h1 {
    font-size: $size-3xl;
    font-family: $font-title;

    color: $color-white;
  }

  @include tablet {
    span {
      font-size: $size-lg;
    }

    h1 {
      font-size: $size-4xl;
    }
  }

  @include desktop {
    align-items: start;
    margin-top: 3.5rem;
  }
}
</style>
