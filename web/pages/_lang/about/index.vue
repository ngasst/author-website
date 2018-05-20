<template>
  <section id="author-page">
    <h1 class="author-name">Dany G. Zuwen</h1>
    <div class="author-bio">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat magni dolore nesciunt placeat ut voluptatem. Doloremque explicabo deleniti voluptatibus vitae impedit, quo placeat tempora reprehenderit facere, illum corrupti nesciunt. Possimus!
    </div>
  </section>
</template>

<script>
export default {
  async fetch({ $axios, store }) {
    const bios = $axios.get('/authors/bios/dany');
    store.dispatch('misc/bios/load', bios);
  },
};
</script>

<style lang="stylus" scoped>
@import "../../../assets/css/colors"
#author-page
  padding 0 2rem
  margin 5rem
  background-color: themes[theme].textbg
  min-height 90%
  font-family "Alegreya", 'Times New Roman', Times, serif
  font-size 1.2rem
  @media (min-width 1200px)
    margin 5rem 20rem
  @media (max-width 1000px)
    margin 5rem 10rem
  @media (max-width 800px)
    margin 12rem 1rem 3rem 1rem
  @media (max-width 800px)
    margin-top 15rem
</style>
