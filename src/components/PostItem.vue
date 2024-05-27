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
    <img v-if="item.image" :src="item.image" alt="">
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
  padding: 20px 0
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
