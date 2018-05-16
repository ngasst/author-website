<template>
  <div>
    <TheHeader/>
    <main class="main-content">
      <nuxt />
    </main>
  </div>
</template>

<style lang="stylus">
*
  box-sizing border-box

body
  font-family "Open Sans", sans-serif
  background-color #F9F8F4
  margin 0
  padding 0
  .main-content
    margin-top 12em
</style>

<script>
import TheHeader from '@/components/TheHeader/TheHeader'

export default {
  components: {
    TheHeader
  },
}
</script>
