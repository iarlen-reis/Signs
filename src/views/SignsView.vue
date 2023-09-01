<script setup lang="ts">
import SignCard from '@/components/SignCard.vue'
import { api } from '../utils/api'
import { useQuery } from '@tanstack/vue-query'

interface ISignProps {
  _id: string
  name: string
  image: string
  period: string
}

interface ISignsProps {
  signs: ISignProps[]
}

const { data: signs } = useQuery(['signs'], async () => {
  const response = await api.get<ISignsProps>('/signs')

  const data = response.data

  return data
}, {
  staleTime: Infinity
})
</script>

<template>
  <div class="signs">
    <div class="signs__aprensentation">
      <h1>signos Zodíacos!</h1>
      <p>Aqui se encontra todos os signos zodíacos.</p>
    </div>
    <div class="signs__grid" v-if="signs">
      <SignCard
        v-for="sign in signs.signs"
        :key="sign._id"
        :id="sign._id"
        :sign="sign"
        :image="sign.image"
        :name="sign.name"
        :period="sign.period"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
@use '@/assets/scss/mixins.scss' as *;

.signs {
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;

  gap: $gap-9;
}

.signs__aprensentation {
  display: flex;
  flex-direction: column;

  color: $color-white;

  h1 {
    font-family: $font-title;
    font-size: $size-3xl;
  }

  p {
    font-size: $size-lg;
    font-style: italic;
  }

  @include tablet {
    h1 {
      font-family: $font-title;
      font-size: $size-4xl;
    }

    p {
      font-size: $size-xl;
    }
  }
}

.signs__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: $gap-7;
  justify-content: space-between;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include desktop {
    grid-template-columns: repeat(3, 1fr);
  }

  /* @media (min-width: 1280px) {
      grid-template-columns: repeat(4, 1fr);
      
    } */
}
</style>
