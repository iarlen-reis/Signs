<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <ul>
        <li>
          <a target="_blank" href="https://github.com/iarlen-reis/Signs">Github</a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/iarlen-reis/signsAPI">Signs API</a>
        </li>
      </ul>
        <a target="_blank" href="https://github.com/iarlen-reis/">&copy; 2023 Iarlen Reis</a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;
@use '../assets/scss/mixins.scss' as *;

.footer {
  width: 100%;

  &__container {
    @include container;
    @include flex-center;
    justify-content: space-between;

    padding: 1rem;

    ul {
      display: flex;
      flex-direction: column;
      gap: $gap-3;

      li {
        font-size: $size-sm;

        @include tablet {
          font-size: $size-base;
        }

        @include desktop {
          font-size: $size-lg;
        }

        a {
          color: $color-link;
          transition: all 0.4s;

          &:hover {
            opacity: 0.8;
            text-decoration: underline;
          }
        }
      }
    }

    a {
      font-size: $size-sm;
      
      transition: all 0.4s;
      color: $color-link;

      &:hover {
        opacity: 0.8;
        text-decoration: underline;
      }

      @include tablet {
        font-size: $size-base;
      }

      @include desktop {
        font-size: $size-lg;
      }
    }
  }
}
</style>
