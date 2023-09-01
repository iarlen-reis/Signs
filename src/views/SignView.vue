<script setup lang="ts">
import { onMounted } from 'vue'
import { api } from '@/utils/api'
import { useRoute } from 'vue-router'
import { reactive } from 'vue'

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

const sign: ISignProps = reactive({} as ISignProps)

onMounted(async () => {
  const response = await api.get<ISignProps>(`signs/${route.params.id}`)

  const data = response.data

  sign.sign = data.sign

  scrollTo(0, 0)
})
</script>

<template>
  <div class="sign" v-if="sign.sign">
    <div class="sign__image">
      <img :src="sign.sign.image" :alt="sign.sign.name" />
    </div>
    <div class="sign__information">
      <div class="sign__details">
        <h1>{{ sign.sign.name }}</h1>
        <span>{{ sign.sign.period }}</span>
      </div>
      <div class="sign_group__list">
        <div class="sign__characteristics">
          <h2>Caracteristicas:</h2>
          <ul>
            <li v-for="characteristic in sign.sign.characteristics" :key="characteristic">
              - {{ characteristic }}
            </li>
          </ul>
        </div>
        <div class="sign__compatility">
          <h2>Compatibilidade:</h2>
          <ul>
            <li v-for="compatility in sign.sign.compatility" :key="compatility">
              - {{ compatility }}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="sign__description">
          <h2>Sobre o signo:</h2>
          <div class="sign__description__container">
            <p v-for="description in sign.sign.description" :key="description">
              {{ description }}
            </p>
          </div>
        </div>
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
  grid-template-rows: 1fr 2fr;
  gap: $gap-1;

  padding-bottom: 5rem;

  color: $color-white;
  text-shadow: 1px 1px 2px $color-link;

  ul {
    display: flex;
    flex-direction: column;
    gap: $gap-2;
  }

  li {
    font-size: $size-lg;
  }

  @include tablet {
    li {
      font-size: $size-xl;
    }
  }

  @include desktop {
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 1fr;
  }
}

.sign__image {
  width: 100%;
  max-width: 300px;
  max-height: fit-content;
  margin: 0 auto;

  img {
    width: 100%;
  }

  @include desktop {
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    img {
      transition: all 0.4s;

      &:hover {
        transform: scale(1.1);
      }
    }
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

  @media (min-width: 460px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
  }

  @include desktop {
    margin: 0;
  }
}

.sign__details {
  display: flex;
  text-align: center;
  flex-direction: column;

  h1 {
    font-size: $size-4xl;
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

.sign__characteristics {
  width: 100%;
}

.sign__description {
  display: flex;
  flex-direction: column;
  gap: $gap-2;
}

.sign__description__container {
  display: flex;
  flex-direction: column;
  gap: $gap-4;

  p {
    max-width: 700px;
    font-size: $size-lg;
  }

  @include tablet {
    p {
      max-width: 800px;
      font-size: $size-xl;
    }
  }
}
</style>
