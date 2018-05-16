<template>
  <section id="posts">
    <PostPreview v-for="post in posts" :key="post.id" :title="post.title" :thumbnail="post.thumbnail" :summary="post.summary" :slug="post.slug"/>
  </section>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";
export default {
  components: {
    PostPreview
  },
  data() {
    return {
      posts: [
        {
          title: 'A New Beginning',
          summary: 'This is gonna be great.',
          thumbnail: 'https://placeimg.com/600/200/any',
          id: '1',
          slug: 'a-new-beginning'
        },
        {
          title: 'A Second Beginning',
          summary: 'This is gonna be great.',
          thumbnail: 'https://placeimg.com/600/200/any',
          id: '2',
          slug: 'a-second-beginning'
        },
      ]
    }
  }
}
</script>

<style lang="stylus">
#posts
  padding-top 2rem
  display flex
  justify-content center
  align-irems center
  flex-direction column
  @media (min-width: 35rem)
    flex-direction row
</style>
