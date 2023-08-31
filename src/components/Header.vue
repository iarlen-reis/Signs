<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ImageLogo from '@/assets/horoscope-logo.png'

import { ref } from 'vue'

const isMobile = ref<boolean>(false)

const handleMenu = () => {
  isMobile.value = !isMobile.value
}
</script>

<template>
  <header class="header">
    <div class="header__container">
      <RouterLink to="/">
        <img :src="ImageLogo" alt="logo do site" class="logo" />
      </RouterLink>
      <div :class="['navigation', { 'open': isMobile }]">
        <nav :class="['navigation__content', { 'open': isMobile }]">
          <ul>
            <li>
              <RouterLink to="/" @click="handleMenu">Página inicial</RouterLink>
            </li>
            <li>
              <RouterLink to="/sobre" @click="handleMenu">Sobre</RouterLink>
            </li>
          </ul>
        </nav>
        <button ref="isOpen" @click="handleMenu" class="menu">
          <i class="fas fa-bars" v-if="!isMobile"></i>
          <i class="fas fa-times" v-else></i>
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
@use '@/assets/scss/mixins.scss' as *;

@keyframes menu-animation {
  from {
    left: 100%;
  }
  to {
    left: 0%;
  }
}

.header {
  width: 100%;
  position: relative;

  &__container {
    @include container;
    @include flex-center;
    justify-content: space-between;
    padding: 1rem;
  }
}

.logo {
  max-width: 5rem;

  @include tablet {
    max-width: 6rem;
  }
}

.navigation {
  @include flex-center;
  gap: $gap-5;
}

.navigation__content {
  @include flex-center;
  gap: $gap-5;

  ul {
    @include flex-center;
    gap: $gap-5;

    li {
      font-size: $size-lg;

      a {
        transition: all 0.4s;
        color: $color-white;

        &:hover {
          color: $color-link-secundary;
        }
      }

      a.router-link-active {
        color: $color-link-secundary;
      }
    }

    @include mobile {
      display: none;
    }
  }
}

.navigation__content.open {
  @include mobile {
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 6.1rem;  
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 5rem;
    align-items: start;
    justify-content: center;

    z-index: 10;
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    background: $color-link;

    animation: menu-animation 1s ease-in-out;

    ul {
      display: flex;
      flex-direction: column;
    }
  }
}

.menu {
      display: none;
      border: none;
      cursor: pointer;
      background: transparent;

      @include mobile {
        display: flex;
      }

      i {
        font-size: $size-2xl;
        color: $color-white;
      }
    }
</style>
