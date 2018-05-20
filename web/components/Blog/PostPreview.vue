<template>
  <nuxt-link :to="slug">
    <article class="post-preview">
      <div :style="{backgroundImage: `url('${thumbnail}')`}" class="post-thumbnail">
        <div class="main-category-indicator" :style="{backgroundColor: post.category.color}"></div>
      </div>
      <div class="post-preview-content">
        <h1 class="post-title">{{title}}</h1>
        <p class="post-summary">{{summary | limit}}</p>
      </div>
      <div class="post-preview-meta">
        <div class="author">
          <div class="author-picture" :style="{backgroundImage: `url('${author.photos.thumb}')`}"></div>
          <div class="author-details">
            <div v-if="author.name.display">{{author.name.display}}</div>
            <div v-else>{{author.name.first}} {{author.name.last}}</div>
            <div class="date">{{post.created | date}}</div>
            <div class="category" :style="{backgroundColor: post.category.color}"></div>
          </div>
        </div>
        <div class="details"></div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
import moment from 'moment';
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    author: {
      type: Object,
      required: true,
    },
    post: {
      type: Object,
      required: true,
    },
  },
  filters: {
    date(value) {
      return moment(value).format('Do MMM YYYY');
    },
    limit(value) {
      const cutoff = value.slice(0, 250);
      const r = cutoff.slice(0, cutoff.lastIndexOf('.'));

      return r;
    },
  },
};
</script>

<style scoped lang="stylus">
a
  text-decoration none
  color #333
  .post-preview
    box-shadow 1px 1px 2px 2px rgba(0, 0, 0, .3)
    background-color white
    width 85%
    margin auto
    margin 1rem
    .post-thumbnail
      background-position center
      background-size cover
      width 100%
      height 10rem
      position relative
      .main-category-indicator
        position absolute
        bottom 0
        top 0
        width 100%
        opacity .125
        filter blur(1px)
        transition 200ms filter ease-in, 150ms opacity ease-in-out
        &:hover
          filter blur(8px)
          opacity .250
    .post-preview-content
      font-family "Algreya", 'Times New Roman', Times, serif
      padding 1rem
      height 15rem
      font-size 1.1rem
      font-weight 400
      .post-summary
        overflow-y auto
        height 8.5rem
      h1
        font-style italic
        font-size 1.2rem
    .post-preview-meta
      height 4rem
      background-color rgba(0, 0, 0, .75)
      display flex
      justify-content space-between
      align-items center
      font-family "Open Sans", sans-serif
      padding .250rem
      .author
        display flex
        justify-content center
        align-items center
        .author-picture
          width 3rem
          height 3rem
          background-position center
          background-size cover
          border-radius 50%
          border solid black 2px
        .author-details
          color lightgray
          display flex
          justify-content space-between
          align-items center
          flex-flow column nowrap
          .date
            font-size .8rem
          .category
            width 100%
            height .12rem
            margin-top .725rem
            opacity .75

@media (min-width: 35rem)
  a
    .post-preview
      width 25rem

</style>
