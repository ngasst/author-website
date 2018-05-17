<template>
  <div style="height: 100%;">
    <TheHeader/>
    <main class="main-content">
      <nuxt />
    </main>
  </div>
</template>

<style lang="stylus">
.main-content
  margin-top 12em
  height 100%
</style>

<script>
import TheHeader from '@/components/TheHeader/TheHeader';

export default {
  components: {
    TheHeader,
  },
};
</script>
