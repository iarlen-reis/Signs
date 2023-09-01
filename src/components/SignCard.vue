<script setup lang="ts">
  defineProps({
    id: String,
    name: String,
    period: String,
    image: String
  })
</script>

<template>
  <div class="sign">
    <div class="sign__image">
      <img :src="image" :alt="name" />
    </div>
    <div class="sign__details">
      <span>{{ name }}</span>
      <p>{{ period }}</p>
    </div>
    <div class="sign__link">
      <RouterLink :to="`/signos/${id}`">Ver mais</RouterLink>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
@use '@/assets/scss/mixins.scss' as *;

.sign {
  max-width: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: $gap-3;
  padding: 1rem;
  margin: 0 auto;

  border-radius: 8px;

  box-shadow: rgba($color: $color-link, $alpha: 0.30) 0px 3px 8px;
  background: $color-white;

  @include tablet {
    max-width: 340px;

    transition: all 0.4s;

    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }
}

.sign__image {
  width: 100%;

  img {
    width: 100%;

    transition: all 0.4s;

  }
}

.sign__details {
  display: flex;
  flex-direction: column;
  text-align: center;

  span {
    font-family: $font-title;
    font-weight: bold;
    font-size: $size-3xl;
  }

  p {
    font-size: $size-lg;
  }
}

.sign__link {
  width: 100%;
  margin-top: 0.8rem;

  a {
    display: block;
    width: 100%;
    font-size: $size-lg;
    text-align: center;
    font-weight: 600;
    padding: 0.8rem 0;
    border-radius: 8px;

    transition: all 0.4s;
    color: $color-white;
    background: $color-link;

    &:hover {
      background: rgba($color: $color-link, $alpha: 0.7);
    }
  }
}

</style>