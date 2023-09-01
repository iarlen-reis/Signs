<script setup lang="ts">
defineProps({
  descriptions: Array<string>
})
</script>

<template>
  <div class="sign__description">
    <h2>Sobre o signo:</h2>
    <div class="sign__description__container">
      <p v-for="description in descriptions" :key="description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
@use '@/assets/scss/mixins.scss' as *;
.sign__description {
  display: flex;
  flex-direction: column;
  gap: $gap-2;

  h2 {
    font-family: $font-title;
  }

  @include tablet {
    h2 {
      font-size: $size-3xl;
    }
  }
}

.sign__description__container {
  display: flex;
  flex-direction: column;
  gap: $gap-4;

  p {
    max-width: 700px;
    font-size: $size-lg;
    line-height: 1.6rem;
  }

  @include tablet {
    p {
      max-width: 800px;
      font-size: $size-xl;
    }
  }

  @include desktop {
    p {
      font-size: $size-2xl;
    }
  }
}
</style>
