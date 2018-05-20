<template>
  <article>
    <header class="post-header" :style="{backgroundImage: `url('${post.image.large}')`}"></header>
    <section class="post-body" v-html="post.content"></section>
  </article>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  async fetch({ params, store, $axios }) {
    const slug = params.slug;
    const url = `/post/${slug}`;
    const post = (await $axios.get(url)).data;
    store.dispatch('posts/set', post);
  },
  computed: {
    ...mapGetters({
      post: 'posts/post',
    }),
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.summary,
        },
      ],
    };
  },
  layout: 'post',
};
</script>

<style lang="stylus" scoped>
@import '../../../../assets/css/mqs'
@import '../../../../assets/css/colors'

phonew = 400px
phoneh = 166px
tabletw = 700px
tableth = 291px
desktopw = 1200px
desktoph = 500px

article
  display flex
  flex-flow column nowrap
  justify-content center
  align-items center
  color
  margin 0
  .post-header
    background-position center
    background-size cover
    @media medias.phone
      width phonew
      height phoneh
    @media medias.tablet
      width tabletw
      height tableth
    @media medias.desktop
      width desktopw
      height desktoph
  .post-body
    @media medias.phone
      width phonew
    @media medias.tablet
      width tabletw
    @media medias.desktop
      width desktopw
</style>
