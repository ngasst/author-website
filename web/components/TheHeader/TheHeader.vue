<template>
  <header class="main-header">
    <section class="author-name">
      <div class="first-name">Dany G.</div>
      <div class="last-name">Zuwen</div>
      <div class="languages">
        <div class="lang-en">EN</div>
        <div class="lang-fr">FR</div>
      </div>
    </section>
    <nav class="main-nav">
      <div class="nav-links">
        <nuxt-link to="/author">Author</nuxt-link>
        <nuxt-link to="/">Blog</nuxt-link>
        <!-- <nuxt-link>Projects</nuxt-link>
        <nuxt-link>Novels</nuxt-link> -->
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="stylus">
@import "../../assets/css/colors"
dsize = 4.5rem;
zsize = 5rem;

.main-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding .5rem
  padding-bottom: 2.5em;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
  z-index: 10;
  background-color: themes[theme].background;
  background-image url('~/assets/images/black-linen.png')

  .author-name {
    position: relative;
    font-family: 'Montseratt', sans-serif;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;

    .first-name {
      font-weight: 600;
      color:themes[theme].medium;
      font-size: dsize;
      line-height: dsize - 0.8rem;
      letter-spacing: 4px;
    }

    .last-name {
      letter-spacing: -1px;
      font-weight: 800;
      color:themes[theme].dark;
      font-size: zsize;
      line-height: zsize - 1.2rem;
      margin: 0;
      padding: 0;
    }
  }

  .languages {
    position: absolute;
    bottom: -25px;
    right: 5px;
    display: flex;
    font-weight: 600;
    font-size: 1.2rem;
    color: themes[theme].medium;

    .lang-en {
      margin-right: 0.2em;
    }
  }

  .main-nav {
    .nav-links {
      display: flex;
      justify-content: center;
      align-items: flex-end;

      a {
        background-color: themes[theme].dark;
        color: themes[theme].text;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600;
        padding: 0.3em;
        min-width: 100px;
        text-align: center;
        border-bottom: solid 2px themes[theme].dark
        transition border-bottom 600ms ease-in-out 200ms

        &:hover, &:active {
          background-color: themes[theme].medium;
          color: themes[theme].text;
        }
      }

      .nuxt-link-exact-active {
        background-color: themes[theme].medium;
        color: themes[theme].text;
        border-bottom: solid 2px themes[theme].accent
      }
    }
  }
}
</style>
