<template>
  <div class="about">
    <div class="about__paragraphs">
      <div class="about__paragraph">
        <h1>Signs & Horoscopes</h1>
        <p>
          A aplicação de signos e horóscopos foi desenvolvida para praticar os conceitos do
          vueJs. Ela foi inspirada na ideia da
          <a href="https://www.twitch.tv/gaaaabiiiiiiiiii/" target="_blank">gaaaabiiiiiiiiii</a>
          durante uma conversa na live do streamer
          <a href="https://www.twitch.tv/antonydev" target="_blank">AntonyDev</a>.
        </p>
      </div>
      <div class="about__paragraph">
        <h2>Signs API</h2>
        <p>
          O back-end da aplicação foi desenvolvido com o nodeJs utilizando o framework
          <a href="https://fastify.dev/" target="_blank">Fastify</a>. É uma API REST, que utiliza o
          banco de dados MongoDB, com o ORM
          <a href="https://plexinc.github.io/papr/#/" target="_blank">Papr</a>.
        </p>
        <p>
          No Github está disponivél a documentação completa da
          <a href="https://github.com/iarlen-reis/signsAPI" target="_blank">API</a>, ela possui
          endpoints para criação, listagem, atualização e remoção de signos. Foi utilizando também a
          plataforma <a href="https://cloudinary.com/" target="_blank">Cloudinary</a> para armazenar
          as imagens dos signos.
        </p>
      </div>
      <div class="about__paragraph">
        <h2>Diretos e atribuições</h2>
        <ul>
          <li>
            <a href="https://storyset.com/science">- Science illustrations by Storyset</a>
          </li>
          <li>
            <a href="https://www.rawpixel.com/community-board/1707382/signs" target="_blank"
              >- Imagens dos signos (public domain)</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/variables.scss' as *;
@use '@/assets/scss/mixins.scss' as *;

.about {
  padding-bottom: 2rem;
}

.about__paragraphs {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: $gap-4;
}

.about__paragraph {
  max-width: 840px;
  display: flex;
  flex-direction: column;
  gap: $gap-1;

  color: $color-white;

  h1,
  h2 {
    font-family: $font-title;
  }

  h1 {
    font-size: $size-2xl;
  }

  h2 {
    font-size: $size-xl;
  }

  p {
    font-size: $size-base;
    line-height: 1.4rem;
  }

  p + p {
    margin-top: $gap-3;
  }

  a {
    transition: all 0.4s;
    color: $color-black;

    text-shadow: 0 0 2px $color-link;

    &:hover {
      text-decoration: underline;
      color: rgba($color-black, 0.5);
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: $gap-3;
  }

  @include tablet {
    h1 {
      font-size: $size-3xl;
    }

    h2 {
      font-size: $size-2xl;
    }

    p {
      font-size: $size-lg;
    }

    a {
      font-size: $size-lg;
    }
  }

  @include desktop {
    max-width: 960px;

    h1 {
      font-size: $size-4xl;
    }

    h2 {
      font-size: $size-3xl;
    }

    p {
      font-size: $size-xl;
    }

    a {
      font-size: $size-xl;
    }
  }
}
</style>
