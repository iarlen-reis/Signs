<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home__details">
    <p>
      Descubra a compatibilidade perfeita para o seu signo e mergulhe em um mundo de possibilidades!
      Encontre a harmonia entre os astros e suas emoções!
    </p>
    <div class="home__links">
      <RouterLink to="/signos"> Ver signos 💫 </RouterLink>
      <!-- <RouterLink to="/astrology"> Astralogia 💫 </RouterLink> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
@use '@/assets/scss/mixins.scss' as *;

.home__details {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: $gap-4;

  p {
    max-width: 500px;
    font-size: $size-lg;
    line-height: 1.3rem;
    color: $color-white;

    @include tablet {
      font-size: $size-xl;
    }
  }

  @include desktop {
    align-items: start;
    text-align: start;
  }
}

.home__links {
  display: flex;
  align-items: center;
  gap: $gap-4;
  width: 180px;

  a {
    position: relative;
    width: 100%;
    text-align: center;
    font-family: $font-title;
    font-size: $size-base;
    font-weight: 600;

    padding: 0.8rem 0;

    border-radius: 8px;
    color: $color-white;
    background: $color-black;

    transition: all 0.4s;

    &:nth-child(1) {
      background: $color-link-secundary;

      &:hover {
        background: $color-link-secundary-hover;
      }
    }
/* 
    &:nth-child(2) {
      background: $color-link-secundary;
      &:hover {
        background: $color-link-secundary-hover;
      }
    } */
  }

  @include tablet {
    a {
      font-size: $size-lg;
    }
  }
}
</style>
