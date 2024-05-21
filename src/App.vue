<template>
  <div>
    <header class="header">
      <img class="logo" src="./assets/logo.svg" alt="">
    </header>
    <section class="center">
      <nav class="menu">
        <ul>
          <li v-for="(mainMenuItem, i) in mainMenu" :key="i">
            <Icon :icon="mainMenuItem.icon" />
            <span>{{ mainMenuItem.label }}</span>
          </li>
        </ul>
        <span style="color: #ccc; padding-left: 1rem;">B.B.精選看板</span>
        <ul>
          <li v-for="(selectMenuItem, i) in selectMenu" :key="i">
            <Icon :icon="selectMenuItem.icon" />
            <span>{{ selectMenuItem.label }}</span>
          </li>
        </ul>
      </nav>
      <main>
        <img class="topBG" src="./assets/urban_tale.jpeg" alt="">
        <div class="content">
          <h1 class="title">都市傳說</h1>
          <PostItem v-for="(item, i) in article" :key="i" :item="item"></PostItem>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import PostItem from './components/PostItem.vue'
import { Icon } from '@iconify/vue2'
import article from './locales/article.json'
import menu from './locales/menu.json'

export default {
  name: 'App',
  components: {
    PostItem,
    Icon
  },
  data() {
    return {
      article,
      menu,
    }
  },
  computed: {
    mainMenu() {
      const icons = ['mdi:list-box', 'mdi:hot', 'ph:rabbit-fill', 'mingcute:game-2-fill', 'fluent:pen-sparkle-20-filled', 'fluent:people-chat-16-filled',]
      const items = this.menu.slice(0, 6)
      return items.map((d, i) => ({ label: d, icon: icons[i] }))
    },
    selectMenu() {
      const icons = ['icon-park-solid:beauty', 'icon-park-outline:clothes-cardigan', 'mingcute:body-fill', 'fluent:emoji-meme-24-filled', 'fluent-emoji-high-contrast:man-with-bunny-ears', 'majesticons:robot', 'iconamoon:3d-fill', 'lets-icons:ticket-fill', 'fluent:box-24-filled']
      const items = this.menu.slice(6)
      return items.map((d, i) => ({ label: d, icon: icons[i] }))
    }
  },
}
</script>

<style scoped lang="sass">
  .header
    height: 48px
    background-color: #bbebec
    padding: 0 135px
    .logo
      width: 80px
  .center
    display: flex
    width: 1260px
    margin: 0 auto
    padding: 0 135px
  main
    width: 752px
    margin: 20px 12px 0
    background-color: #fff
    border-radius: .25rem
    overflow: hidden
    .topBG
      width: 100%
      height: 242px
      object-fit: cover
    .content
      padding: 20px 60px 0
  .menu
    width: 208px
    color: #fff
    font-weight: 500
    ul
      padding-left: 0
      list-style-type: none
    li
      display: flex
      align-items: center
      gap: .5rem
      padding: 8px 0 8px 16px
      font-size: 1.25rem
      cursor: pointer
      &:hover
        background-color: #386D6E
      :first-child
        font-size: 1.75rem
      

  .title
    font-weight: 500


</style>
