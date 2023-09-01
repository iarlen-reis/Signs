<script setup lang="ts">
defineProps({
  characteristics: Array<string>
})
</script>

<template>
  <div class="sign__characteristics">
    <h2>Caracteristicas:</h2>
    <ul>
      <li v-for="characteristic in characteristics" :key="characteristic">
        - {{ characteristic }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
@use '@/assets/scss/mixins.scss' as *;

.sign__characteristics {
  width: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: $font-title;
  }


  ul {
    display: flex;
    flex-direction: column;
    gap: $gap-2;
  }

  li {
    font-size: $size-lg;
    text-transform: capitalize;
  }

  @include tablet {
    li {
      font-size: $size-xl;
    }

    h2 {
      font-size: $size-3xl;
    }
  }

}
</style>
