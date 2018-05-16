<template>
  <nuxt-link :to="slug">
    <article class="post-preview">
      <div :style="{backgroundImage: `url('${thumbnail}'`}" class="post-thumbnail"></div>
      <div class="post-preview-content">
        <h1 class="post-title">{{title}}</h1>
        <p class="post-summary">{{summary}}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      summary: {
        type: String,
        required: true
      },
      thumbnail: {
        type: String,
        required: true
      },
      slug: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped lang="stylus">
a
  text-decoration none
  color #333
  .post-preview
    border solid thin #333
    background-color white
    width 85%
    margin auto
    height 20rem
    margin 1rem
    .post-thumbnail
      background-position center
      background-size cover
      width 100%
      height 10rem
    .post-preview-content
      text-align center
      padding 1rem

@media (min-width: 35rem)
  a
    .post-preview
      width 25rem

</style>
