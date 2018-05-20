<template>
  <section id="posts">
    <PostPreview v-for="post in posts" :key="post.id" :title="post.title" :thumbnail="post.image.thumb" :summary="post.summary" :slug="post.slug" :author="post.author" :post="post"/>
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview';
import { mapState } from 'vuex';
export default {
  components: {
    PostPreview,
  },
  computed: {
    posts() {
      return this.$store.getters['posts/loadedPosts'];
    },
  },
};
</script>

<style lang="stylus">
#posts
  padding-top 2rem
  display flex
  justify-content center
  align-irems center
  flex-flow column wrap
  @media (min-width: 35rem)
    flex-direction row
</style>
