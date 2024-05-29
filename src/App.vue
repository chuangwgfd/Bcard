<template>
  <div class="Bcard">
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
          <div class="top">
            <h1 class="title">都市傳說</h1>
            <button>追蹤</button>
          </div>
          <PostItem v-for="(item, i) in article" :key="i" :item="item" @itemClick="showDialog(i)"></PostItem>
        </div>
      </main>
    </section>
    <ElDialog 
    :visible.sync="isDialogShow"
    custom-class="ElDialog"
    top="0vh"
    width="752px">
      <template #title>
        <Icon icon="noto-v1:cityscape" />
        <span>都市傳說</span>
      </template>
      <div class="dialogContent">
        <h2>揭秘神秘組織努克教：透過影子與愛人的超神秘儀式！</h2>
        <div class="author">
          <Icon class="authorIcon" icon="material-symbols:face-6" />
          <span>PonyLiao</span>
          <span>．</span>
          <span>2小時前</span>
        </div>
        <div class="content">
          <div>嗨大家，我是Pony，今天我要跟你們分享一個超神秘的故事，就是關於一個叫「努克教」的神秘組織！這群人據說藏在山上，而且只有少數人能參加他們超神奇的儀式。</div><br>
          <div>聽說他們的儀式超級神秘，最神奇的是，居然可以讓你見到逝去的摯愛！對，你沒聽錯，他們聲稱他們的儀式能夠讓你跟已經去世的愛人重逢！</div><br>
          <div>我聽過一個叫馬克的前信徒分享了他的經驗：“第一次參加努克教的儀式時，我還滿心懷疑的。但當儀式開始後，我就彷彿被某種神秘力量吸引了，就好像穿越時空，跟我愛的人再次見面了！在那裡，你跟你愛的人的靈魂完全交流，就算他已經離開，也好像他還在你身邊一樣。”</div><br>
          <img src="images/13.jpg" alt="">
          <div>還有一個叫莉莎的信徒也分享了她的故事：“在努克教的儀式中，我看到了我的丈夫，他彷彿又回到了我身邊。這讓我感受到了愛的力量，也給了我很大的安慰。在那裡，我跟我愛的人的靈魂真的有了超級深刻的交流，這種感覺一直都留在我的心裡。”</div><br>
          <img src="images/01.jpeg" alt="">
          <div>努克教的標誌之一是他們超酷的鳥人面具和特殊的服裝，看起來就像是鳥和人混在一起了。更神奇的是，他們還崇拜影子，認為影子是靈魂的投影，沒有了影子就沒有靈魂存在。</div><br>
          <div>這些超神秘的故事讓我們對這個組織更好奇了。他們到底是怎麼做到這麼神奇的效果的？他們是不是真的有某種神秘的力量？我們會繼續調查下去，保證第一時間告訴你們最新的發現。</div><br>
          <img src="images/11.jpeg" alt="">
          <img src="images/14.jpg" alt="">
          <div>想想，如果這一切都是真的，那意味著你可以跟你逝去的愛人重逢，即便他已經不在你身邊了！這種超自然的體驗真的是太令人難以置信了！</div><br>
          <div>我們都知道，世界上有太多未知的事情，努克教的秘密也許就是其中之一。我們會繼續關注，希望有一天能揭開這神秘組織的真相！大家敬請期待我的後續報導！</div>
          <img src="images/08.jpeg" alt="">
        </div>
      </div>
    </ElDialog>
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

      isDialogShow: false,
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
  methods: {
    showDialog(i) {
      if (i === 2) {
        this.isDialogShow = true
      }
    }
  },
}
</script>

<style scoped lang="sass">
.Bcard
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
      
  .top
    display: flex
    justify-content: space-between
    align-items: center
    button
      height: 40px
      background-color: #386D6E
      border: 0
      color: #fff
      font-weight: 500
      border-radius: .5rem
      padding: .5rem 1rem
      cursor: pointer
      line-height: 0
  .title
    font-weight: 500

  ::v-deep .ElDialog
    .el-dialog__header
      display: flex
      align-items: center
      gap: .5rem
      font-size: 1.75rem
      border-bottom: 1px solid #ddd

    .el-dialog__body
      padding: 20px
      h2
        font-size: 24px
        margin: 0
        margin-bottom: .5rem
      img
        width: 100%

    .author
      display: flex
      align-items: center
      margin-bottom: 1rem
      .authorIcon
        width: 18px
        height: 18px
        color: #fff
        background-color: #006aa6
        border-radius: 500px
        margin-right: .5rem
      span
        color: #00000080

    .content
      font-size: 1rem


</style>
