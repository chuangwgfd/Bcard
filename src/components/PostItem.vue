<template>
  <div class="PostItem" @click="showDialog">
    <div class="author">
      <Icon class="authorIcon" icon="material-symbols:face-6" />
      <span>{{ item.author }}</span>
      <span>．</span>
      <span>{{ item.time }}</span>
    </div>
    <h3 class="title">{{ item.title }}</h3>
    <p class="content">{{ item.content }}</p>
    <div class="footer">
      <!-- <Icon icon="emojione-v1:red-heart" /> -->

      <Icon v-for="(icon, i) in item.emoji" :key="i" :icon="icon" />
      <span class="ml-5">{{ item.emojiCount }}</span>
      <Icon icon="emojione-v1:right-speech-bubble" class="chat ml-5"/>
      <span>{{ item.chatCount }}</span>
      <Icon icon="material-symbols:bookmark" class="bookmark" />
      <span>收藏</span>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';

export default {
  name: 'PostItem',
  components: {
    Icon
  },
  props: {
    item: Object
  },
  methods: {
    showDialog(params) {
      this.$emit('itemClick')
    }
  },
}
</script>

<style scoped lang="sass">
.PostItem
  border-top: 1px solid #ddd
  padding: 1rem 0
  cursor: pointer
.author
  display: flex
  align-items: center
  .authorIcon
    width: 18px
    height: 18px
    color: #fff
    background-color: #006aa6
    border-radius: 500px
    margin-right: .5rem
  span
    color: #00000080

.footer
  color: #aaa
  display: flex
  align-items: center
  font-size: 1.3rem
  margin-top: .5rem
  .ml-5
    margin: 0 .3rem
  .chat, .bookmark
    margin-left: 3rem
  span
    font-size: 1rem

.title
  margin: 8px 0
.content, .author
  font-size: 14px
  margin: 0
img
  width: 100%
  height: 342px
  object-fit: cover
  border-radius: 1rem
  margin-top: 1rem
</style>
