<script setup lang="ts">
defineProps({
  compatilitys: Array<string>
})
</script>

<template>
        <div class="sign__compatility">
          <h2>Compatibilidade:</h2>
          <ul>
            <li v-for="compatility in compatilitys" :key="compatility">
              - {{ compatility }}
            </li>
          </ul>
        </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
@use '@/assets/scss/mixins.scss' as *;

.sign__compatility {
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