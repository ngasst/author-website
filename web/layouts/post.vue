<template>
  <div style="height: 100%;">
    <TheHeader/>
    <main class="main-content">
      <nuxt />
    </main>
  </div>
</template>

<style lang="stylus">
@import "../assets/css/colors"
@import "../assets/css/mqs"
.main-content
  height 100%
  @media medias.phone
    margin-top 14.2rem
  @media medias.table
    margin-top 10.5rem
  .post-body
    background-color: themes[theme].textbg
    color: themes[theme].text
    font-family "Alegreya", 'Times New Roman', Times, serif
    padding 1rem 1.5rem
    h1
      font-size 2.5rem
      font-style italic
      font-weight bold
    h2
      font-size 2rem
      font-weight semi-bold
    h3
      font-size 1.7rem
    h4
      font-size 1.5rem
    p
      em
        font-style italic
      strong
        font-weight bold
</style>

<script>
import TheHeader from '@/components/TheHeader/TheHeader';

export default {
  components: {
    TheHeader,
  },
};
</script>
