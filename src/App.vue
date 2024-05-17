<template>
  <div>
    <header class="header">
      <img class="logo" src="./assets/logo.svg" alt="">
    </header>
    <section class="center">
      <nav class="menu">
        <ul>
          <li>
            <Icon icon="mdi:list-box" />
            <span>所有看板</span>
          </li>
          <li>
            <Icon icon="mdi:hot" />
            <span>即時熱門看版</span>
          </li>
          <li>
            <Icon icon="ph:rabbit-fill" />
            <span>好兔研究室</span>
          </li>
          <li>
            <Icon icon="mingcute:game-2-fill" />
            <span>遊戲大廳</span>
          </li>
          <li>
            <Icon icon="fluent:pen-sparkle-20-filled" />
            <span>創作精華區</span>
          </li>
          <li>
            <Icon icon="fluent:people-chat-16-filled" />
            <span>社群</span>
          </li>
        </ul>
        <span style="color: #ccc;">B.B.精選看板</span>
        <ul>
          <li>
            <Icon icon="icon-park-solid:beauty" />
            <span>美妝</span>
          </li>
          <li>
            <Icon icon="mdi:hot" />
            <span>穿搭</span>
          </li>
          <li>
            <Icon icon="ph:rabbit-fill" />
            <span>健身減肥</span>
          </li>
          <li>
            <Icon icon="mingcute:game-2-fill" />
            <span>迷因</span>
          </li>
          <li>
            <Icon icon="mingcute:game-2-fill" />
            <span>好兔小姐</span>
          </li>
          <li>
            <Icon icon="mingcute:game-2-fill" />
            <span>奇妙機器人</span>
          </li>
          <li>
            <Icon icon="mingcute:game-2-fill" />
            <span>3D列印同好社群</span>
          </li>
          <li>
            <Icon icon="mingcute:game-2-fill" />
            <span>一番賞情報網</span>
          </li>
          <li>
            <Icon icon="mingcute:game-2-fill" />
            <span>紙箱哥研究社</span>
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
import { Icon } from '@iconify/vue2';
import article from './assets/article.json'

export default {
  name: 'App',
  components: {
    PostItem,
    Icon
  },
  data() {
    return {
      article
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
      padding: 11px 0
      font-size: 1.25rem
      :first-child
        font-size: 1.75rem

  .title
    font-weight: 500


</style>
