<script setup lang="ts">
import { api } from '@/utils/api'
import { useRoute } from 'vue-router'
import { useQuery } from '@tanstack/vue-query'
import { onMounted } from 'vue';
import SignImage from '@/components/SignImage.vue';
import SignDetails from '@/components/SignDetails.vue';
import SignDescription from '@/components/SignDescription.vue';
import SignCharacteristics from '@/components/SignCharacteristics.vue';
import SignCompatility from '@/components/SignCompatility.vue';
const route = useRoute()

interface ISignProps {
  sign: {
    name: string
    period: string
    image: string
    description: string[]
    compatility: string[]
    characteristics: string[]
  }
}

const {data: sign} = useQuery(['signs', route.params.id], async () => {
  const response = await api.get<ISignProps>(`signs/${route.params.id}`)

  const data = response.data

  return data
}, {
  staleTime: Infinity,
})

onMounted(() => {
  scrollTo(0, 0)
})
</script>

<template>
  <div class="sign" v-if="sign">
    <SignImage :image="sign.sign.image" />
    <div class="sign__information">
      <SignDetails :name="sign.sign.name" :period="sign.sign.period" />
      <div class="sign_group__list">
        <SignCharacteristics :characteristics="sign.sign.characteristics" />
        <SignCompatility :compatilitys="sign.sign.compatility" />
      </div>
      <div>
        <SignDescription :descriptions="sign.sign.description" />
      </div>
    </div>
  </div>
  <div v-else>aaaa</div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
@use '@/assets/scss/mixins.scss' as *;

.sign {
  display: grid;
  grid-template-rows: 1fr 2.5fr;
  gap: $gap-1;

  padding-bottom: 5rem;

  color: $color-white;
  text-shadow: 1px 1px 2px $color-link;

  @include desktop {
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 1fr;
  }
}

.sign__information {
  display: flex;
  flex-direction: column;
  gap: $gap-4;

  h1,
  h2 {
    font-family: $font-title;
  }
  
  @include tablet {
    h2 {
      font-size: $size-3xl;
    }
  }
}

.sign_group__list {
  width: 100%;
  max-width: 500px;

  display: flex;
  flex-direction: column;
  gap: $gap-4;

  @media (min-width: 400px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
  }

  @include desktop {
    margin: 0;
  }
}
</style>
